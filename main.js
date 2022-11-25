const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeaders.addEventListener("click", () => {
        accordionItemHeaders.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling
        if(accordionItemHeaders.classList.contains("active")){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px"
        }
        else{
            accordionItemBody.style.maxHeight = 0
        }

    });
});