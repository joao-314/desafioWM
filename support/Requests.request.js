/// <reference types="cypress"/>

const payloads = require('../fixtures/BASEpayload.json')


function listarInfos(endpoint) {
    return cy.request({
        method: 'GET',
        url: payloads.baseUrl+endpoint,
        failOnStatusCode: false,
    })   
}

export {listarInfos};
