namespace RaisingAndLoggingError {

const fs = require("fs");

function raise(message: string): never {
    console.error(`Error "${message}" raised at ${new Date()}`);
    throw new Error(message);
}

function readConfig(configFile: string): string {
    if (!fs.existsSync(configFile))
        raise(`Configuration file ${configFile} missing`);

    return fs.readFileSync(configFile, "utf-8");
}

}