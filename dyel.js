

var hello_noauth = require('./api/hello/noauth/noauth');
var hello_auth = require('./api/hello/auth/auth');

var auth_login = require('./api/auth/login/login');
var auth_logout = require('./api/auth/logout/logout');

var preferences = require('./api/preferences/preferences');
var activities = require('./api/activities/activities');

var activities_done = require('./api/activities/done/done');
var activities_by_id = require('./api/activities/by_id/by_id');

var routines = require('./api/routines/routines');

var routine_programs = require('./api/routine-programs/routine-programs');

var routine_by_id = require('./api/routine/by_id/by_id');
var routine_by_id_add = require('./api/routine/by_id/add/add');
var routine_by_id_delete = require('./api/routine/by_id/delete/delete');

var routine_by_id_activity_get_by_slot_number = require('./api/routine/by_id/activity/get_by_slot_number/get_by_slot_number');
var routine_by_id_activity_post_by_slot_number = require('./api/routine/by_id/activity/post_by_slot_number/post_by_slot_number');

var routine_by_id_activities = require('./api/routine/by_id/activities/activities');
var routine_by_id_activity_add = require('./api/routine/by_id/activity/add/add');
var routine_by_id_activity_delete = require('./api/routine/by_id/activity/delete/delete');

var routineinstances = require('./api/routineinstances/routineinstances');

var workout_by_id = require('./api/workout/by_id/by_id');
var workout_by_id_score = require('./api/workout/by_id/score/score');

var routineinstance_by_id_exercises = require('./api/routineinstance/by_id/exercises/exercises');
var routineinstance_by_id_hr = require('./api/routineinstance/by_id/hr/hr');

var workouts_month = require('./api/workouts/month/month');
var workouts_day = require('./api/workouts/day/day');

var api = {
    init: function (config) {

        if (config) {
            this.config = config;
        } else {
            this.config = {
                api_root: process.env.ATLAS_WEARABLES_API_ROOT,
                auth_token: process.env.ATLAS_WEARABLES_AUTH_TOKEN,
                credentials: {
                    api_sid: process.env.ATLAS_WEARABLES_SID,
                    api_secret: process.env.ATLAS_WEARABLES_SECRET,
                    username: process.env.ATLAS_WEARABLES_USERNAME,
                    password: process.env.ATLAS_WEARABLES_PASSWORD
                }
            }
        }
    },
    hello_noauth: hello_noauth,
    hello_auth: hello_auth,
    auth_login: auth_login,
    auth_logout: auth_logout,
    preferences: preferences,
    activities: activities,
    activities_done: activities_done,
    activities_by_id: activities_by_id,
    routines: routines,
    routine_programs: routine_programs,
    routine_by_id: routine_by_id,
    routine_by_id_add: routine_by_id_add,
    routine_by_id_delete: routine_by_id_delete,
    routine_by_id_activities: routine_by_id_activities,
    routine_by_id_activity_get_by_slot_number: routine_by_id_activity_get_by_slot_number,
    routine_by_id_activity_post_by_slot_number: routine_by_id_activity_post_by_slot_number,
    routine_by_id_activity_add: routine_by_id_activity_add,
    routineinstances: routineinstances,
    workout_by_id: workout_by_id,
    workout_by_id_score: workout_by_id_score,
    routineinstance_by_id_hr: routineinstance_by_id_hr,
    workouts_month: workouts_month,
    workouts_day: workouts_day
};

module.exports = api;


