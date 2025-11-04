
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter li');
    const productItems = document.querySelectorAll('.filter-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            // Filter products
            productItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var buyNowModal = document.getElementById('buyNowModal');
    buyNowModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        var product = button.getAttribute('data-product');
        var productInput = document.getElementById('productName');
        productInput.value = product;
    });
});

// Submit order to WhatsApp
function submitToWhatsApp() {
    const product = document.getElementById('productName').value;
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('phoneNumber').value;
    const place = document.getElementById('customerPlace').value;
    const quantity = document.getElementById('quantity').value;

    if (name && phone && place && quantity) {
        // Format the message
        const message = `Order Request:\n\nProduct: ${product}\nQuantity: ${quantity} KG\nCustomer Name: ${name}\nPhone: ${phone}\nLocation: ${place}\n\nPlease confirm receipt of this order.`;


        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Replace with your WhatsApp business number (without +)
        const whatsappNumber = "918015009167";

        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappURL, '_blank');

        // Close the modal
        var modal = bootstrap.Modal.getInstance(document.getElementById('buyNowModal'));
        modal.hide();

        // Reset form
        document.getElementById('orderForm').reset();
    } else {
        alert('Please fill all the fields before placing your order.');
    }
}



document.getElementById("whatsappForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Your business WhatsApp number (with country code, no + sign)
    const whatsappNumber = "918015009167";

    const text = `🌿 Hello Surguru Organic,%0A%0AI'd like to get in touch regarding your organic products.%0A%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A💬 Message: ${message}%0A%0AThank you!`;

    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(url, "_blank");
});
