$(document).ready(function() {
    $('#generateButton').on('click', function() {
        const inputText = $('#inputText').val();
        $('#qrcode').empty(); // Clear previous QR code

        if (inputText) {
            $('#qrcode').qrcode({
                text: inputText,
                width: 200,
                height: 200
            });

            // Show the download button
            $('#downloadButton').show();
        } else {
            alert("Please enter a valid text or URL");
        }
    });

    $('#downloadButton').on('click', function() {
        const qrCanvas = $('#qrcode canvas')[0];
        const margin = 20; // Margin size in pixels

        // Create a new canvas with margin
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = qrCanvas.width + margin * 2;
        canvas.height = qrCanvas.height + margin * 2;

        // Fill the new canvas with white background
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the QR code onto the new canvas with margin
        context.drawImage(qrCanvas, margin, margin);

        // Convert the new canvas to data URL and download
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'qrcode.png';
        link.click();
    });
});