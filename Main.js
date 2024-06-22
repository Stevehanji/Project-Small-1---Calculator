const AllButton = document.querySelectorAll(".Caculator .Caculator__Button button")
ScreenNumber = document.querySelector(".Caculator .Caculator__Screen .NumberInScreen")
ScreenSign = document.querySelector(".Caculator .Caculator__Screen .sign")

NewScreenNumber = ScreenNumber.textContent // String
IsStart = true
KindOfSign = 0
result = null

AllButton.forEach(function(Button)
{
    Button.addEventListener("click",function()
    {
        switch (Button.textContent)
        {
            case "+":
                ScreenSign.textContent = "+"
                KindOfSign = 1
                IsStart = true

                if (result == null) result = parseInt(NewScreenNumber)
                else result += parseInt(NewScreenNumber)
                break;
            
            case "-":
                ScreenSign.textContent = "-"
                KindOfSign = 2
                IsStart = true

                if (result == null) result = parseInt(NewScreenNumber)
                else result -= parseInt(NewScreenNumber)
                break;
            
            case "x":
                ScreenSign.textContent = "x"
                KindOfSign = 3
                IsStart = true

                if (result == null) result = parseInt(NewScreenNumber)
                else result *= parseInt(NewScreenNumber)
                break;
            
            case "/":
                ScreenSign.textContent = "/"
                KindOfSign = 4
                IsStart = true

                if (result == null) result = parseInt(NewScreenNumber)
                else result /= parseInt(NewScreenNumber)
                break;
            
            case "=":
                switch (KindOfSign)
                {
                    case 1:
                        result += parseInt(NewScreenNumber)
                        break;
                    
                    case 2:
                        result -= parseInt(NewScreenNumber)
                        break;
                    
                    case 3:
                        result *= parseInt(NewScreenNumber)
                        break;
                    
                    case 4:
                        result /= parseInt(NewScreenNumber)
                        break;
                }
                
                if (toString(result).length >= 9) {
                    result = result.toString().slice(0,7)
                    result += "..."
                }

                KindOfSign = 0
                NewScreenNumber = result
                result = null
                ScreenSign.textContent = ""

                break;
            
            case "C":
                IsStart = true;
                NewScreenNumber = 0;
                ScreenSign.textContent = ""
                break;
            
            default:
                if (IsStart) {
                    NewScreenNumber = Button.textContent
                    IsStart = false;
                }
                else {
                    if (NewScreenNumber.length < 9)
                        NewScreenNumber += Button.textContent
                }
                break;
        }

        ScreenNumber.textContent = NewScreenNumber

    })
})