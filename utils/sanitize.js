/**
 * Sanitize MongoDB Queries
 * - Prevents NoSQL Injectyions
 * - Code from https://github.com/vkarpov15/mongo-sanitize
 */
module.exports = query => {
        if (query instanceof Object) {
            for (let key in query) {
                if (/^\$/.test(key)) {
                    delete query[key];
                } else {
                    sanitize(query[key]);
                }
            } 
        }
        return query;
}