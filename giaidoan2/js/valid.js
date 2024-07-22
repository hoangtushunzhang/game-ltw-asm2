function Validator(options) {
    var selectorRules = {}

    var getParent = function(element, selector){
        while (element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    // Hàm thực hiện validate()
    function validate(inputElement, rule){

        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        var errorMessage

        // Lấy ra các rule của selector
        var rules = selectorRules[rule.selector]

        // Lặp qua từng rule và check
        // Nếu có lỗi thì dừng kiểm tra
        for(var i = 0; i < rules.length; i++){
            switch(inputElement.type){
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default: 
                    errorMessage = rules[i](inputElement.value)
            }
           
            if(errorMessage) break
        }

        if(errorMessage){
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid') 
        } else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid') 
        }

        return !errorMessage
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form)
    if (formElement) {
        formElement.onsubmit = function(e){
            e.preventDefault()

            var isFormValid = true

            //Lặp qua từng rule
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule)
                if(!isValid){
                    isFormValid = false
                }
            })
            

            if(isFormValid){
                // Submit với js
                if(typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]') 

                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        switch(input.type){
                            case 'checkbox':
                                if(!input.matches(':checked')){
                                    values[input.name] = ''
                                    return values
                                }
                                if(!Array.isArray(values[input.name])){
                                    values[input.name] = []
                                }
                                values[input.name].push(input.value)
                                break
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                                break
                            case 'file':
                                values[input.name] = input.files
                                break
                            default:
                                values[input.name] = input.value

                        }

                        return values;
                    }, {})
                    options.onSubmit(formValues)
                }
                // Submit với hành vi mặc định
                else{
                    formElement.submit()
                }
            }
        }

        // lặp qua các rule và xử lí
        options.rules.forEach(function (rule) {
            //Lưu lại các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElements = formElement.querySelectorAll(rule.selector)
            Array.from(inputElements).forEach(function(inputElement){
                // Xử lí blur ra khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }
    
                 // Xử lí khi nhập input
                 inputElement.oninput = function(){
                var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                errorElement.innerText = ''
                getParent(inputElement, options.formGroupSelector).classList.remove('invalid') 
                }

            })
            
            
        })
    }
}
// Định nghĩa rules
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    };
}
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    };
}
Validator.maxLength = function (selector, max, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length <= max ? undefined : message || `Vui lòng nhập tối đa ${min} ký tự`
        }
    };
}
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập email'
        }
    };
}
Validator.isConfirmed = function(selector, getConfirmValue, message){
        return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : (message || 'Giá trị này không chính xác')
        }
    }
}
