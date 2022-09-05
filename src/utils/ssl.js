export const options = {
    key: fs.readFileSync("./ssl/private.key"),
    cert: fs.readFileSync('./ssl/certificate.crt'),
};