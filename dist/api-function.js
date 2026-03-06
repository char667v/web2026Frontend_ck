// Dummy data som bliver erstattet af et fetch kald til Python backend'en.
export async function getUsers() {
    return [{ firstname: 'Mig', lastname: 'P', email: 'mai@mai.dk', password: 1234 },
        { firstname: 'Anarikke', lastname: 'P', email: 'mafdsfadsfi@mai.dk', password: 2345 },
        { firstname: 'Lea', lastname: 'P', email: 'dsfaddfsfa@mai.dk', password: 1237 },
        { firstname: 'Laura', lastname: 'P', email: 'mfadsfdsafsadfaai@mai.dk', password: 1238 }
    ];
}
//# sourceMappingURL=api-functions.js.map