export default function downloadFile(req, res) {
    try {
        const { fileName } = req.query;

        if ( !fileName ) {
            return res.status(400).json({ error: "File name is required." });
        }

        const filePath = `/public/uploads/${fileName}`;
        const contentType = getContentType(fileName);

        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Type', contentType);

        res.sendFile(filePath);
    }
    catch (error){
        console.error('Error downloading file: ', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

function getContentType(fileName) {
    const fileExtension = fileName.split('.').pop().toLowerCase();

    switch(fileExtension){
        case 'pdf':
            return 'application/pdf';
        case 'zip':
            return 'application/zip';
        default:
            return 'application/ocet-stream';
    }
}