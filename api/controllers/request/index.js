'use strict';

const HELPER_BASE = process.env.HELPER_BASE || '../../helpers/';
const Response = require(HELPER_BASE + 'response');
const Redirect = require(HELPER_BASE + 'redirect');

exports.handler = async (event, context, callback) => {
  if( event.path == '/post-json'){
    console.log(event.body);

    var body = JSON.parse(event.body);
    var response = {
      path : event.path,
      param: {
        param1: body.param1,
        param2: body.param2,
      }
    };
    return new Response(response);
  }else
  if( event.path == '/post-urlencoded'){
    // Lambda＋API Gatewayの場合はこちら
    //var body = {};
    //for( var pair of new URLSearchParams(event.body).entries() ) obj[pair[0]] = pair[1];
    // swagger_nodeの場合はこちら
    var body = JSON.parse(event.body);

    console.log(event.body);
    var response = {
      path : event.path,
      param: {
        param1: body.param1,
        param2: body.param2,
      }
    };
    return new Response(response);
  }else
  if( event.path == '/post-formdata' ){
    console.log(event.body);

    var body = JSON.parse(event.body);
    var response = {
      path : event.path,
      param: {
        param1: body.param1,
        param2: body.param2,
      }
    };
    return new Response(response);
  }else
  if( event.path == '/get-qs'){
    console.log(event.queryStringParameters);

    var response = {
      path : event.path,
      param: {
        param1: event.queryStringParameters.param1,
        param2: event.queryStringParameters.param2,
      }
    };
    return new Response(response);
  }
};
