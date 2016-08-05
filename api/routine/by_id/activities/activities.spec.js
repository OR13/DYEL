
// var dyel = require('../../../../../dyel');

// var assert = require('chai').assert;

// describe('.routine_by_id_activities(routine_id)', function () {

//     //  this.timeout(5 * 1000);

//     before(function () {
//         // runs before all tests in this block
//         dyel.init();
//         // console.log('begin login tests complete.')

//         return dyel.auth_login({
//             api_sid: dyel.config.credentials.api_sid,
//             api_secret: dyel.config.credentials.api_secret,
//             username: dyel.config.credentials.username,
//             password: dyel.config.credentials.password
//         });
//     });

//     it('should return exercise data for the given user/routine_id/slots.', function () {

//         var routine_id = '23599';
//         var slots = 0;
    
//         return dyel.routine_by_id_activities({
//             api_sid: dyel.config.credentials.api_sid,
//             api_secret: dyel.config.credentials.api_secret,
//             auth_token: dyel.session.token,
//             slots: slots
//         }, routine_id)
//             .then((data) => {

//                 assert.isObject(data);

//                 // console.log(data)

//                 // status
//                 assert.isString(data.status);
//                 // errors[]
//                 assert.isArray(data.errors);

//                 // // name
//                 // assert.isString(data.name);
//                 // // id
//                 // assert.isString(data.id);
//                 // // slot_number
//                 // assert.isNumber(data.slot_number);
//                 // // units
//                 // assert.isString(data.units);
//                 // // units_text
//                 // assert.isString(data.units_text);
//                 // // value
//                 // assert.isString(data.value);
//                 // // weight
//                 // assert.isString(data.weight);

//             })
//             .catch((err) => {
//                 // API call failed...
//                 console.log('err: ', err);
//                 // assert(err === undefined);
//             });

//     });


//     after(function () {
//         // runs after all tests in this block
//         // console.log('login tests complete.')
//     });

// });

