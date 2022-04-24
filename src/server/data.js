const casual = require('casual');



module.exports = () => {

    const data = { customers: [], warranties: [] };

    for (let i = 0; i < 20; i++) {
        const customerId = i + 1;
        const customer = {
            id: customerId,
            name: casual.full_name,
            email: casual.email,
        };

        for (let j = 0; j < 5; j++) {


            const warranty = {
                customerId: customerId,
                productName: casual.random_element(["Toaster", "Iron", "CellPhone", "Bike", "Television", "Generator"]),
                serialNumber: casual.uuid,
                startDate: casual.date(format = 'DD/MM/YYYY'),
                endDate: casual.date(format = 'DD/MM/YYYY')
            };

            data.warranties.push(warranty);
        }

        data.customers.push(customer);
    };

    return data;
}