export function isEmpty(obj: Record<string, any>): boolean {
    let res = true;

    for (const prop in obj) {
        if (!obj.hasOwnProperty(prop)) {
            continue;
        }

        const type = typeof obj[prop];

        switch (type) {
            case "object":
                res = isEmpty(obj[prop]);
                break;

            case "boolean":
            case "number":
                res = false;
                break;

            case "string":
                res = !obj[prop].length;
                break;

            case "undefined":
                res = true;
                break;

            default:
                res = !!obj[prop];
                break;
        }

        if (!res) {
            break;
        }
    }

    return res;
}