const cartButton = document.querySelectorAll(".cart_btn");
cartButton.forEach(button =>
    {
        button.addEventListener('click', cartActive);
    });

    function cartActive()
    {
        this.classList.add('active');
    }