import {headerTestId, homeTestId, listTestId, registrationTestId} from "./testId.const.js";

export function headerElement(homeViewWrapper) {
    const heading = homeViewWrapper?.find(`[data-testid = ${headerTestId.navHeading}]`);
    const navRegistrationBtn = homeViewWrapper?.find(`[data-testid = ${headerTestId.navRegistrationBtn}]`);
    const navListBtn = homeViewWrapper?.find(`[data-testid = ${headerTestId.navListBtn}]`);
    const navHomeBtn = homeViewWrapper?.find(`[data-testid = ${headerTestId.navHomeBtn}]`);
    return {heading, navRegistrationBtn, navListBtn, navHomeBtn};
}

export function homeElement(homeViewWrapper) {
    const listBtn = homeViewWrapper?.find(`[data-testid = ${homeTestId.listBtn}]`);
    const registrationBtn = homeViewWrapper?.find(`[data-testid = ${homeTestId.registrationBtn}]`);
    return {listBtn, registrationBtn};
}

export function registerElement(registerWrapper) {
    // from
    const registerForm = registerWrapper.find(`[data-testid = ${registrationTestId.registrationForm}]`);
    const nameField = registerWrapper.find(`[data-testid = ${registrationTestId.formInputName}]`);
    const emailField = registerWrapper.find(`[data-testid = ${registrationTestId.formInputEmail}]`);
    const roleField = registerWrapper.find(`[data-testid = ${registrationTestId.formInputRole}]`);
    const skillField = registerWrapper.find(`[data-testid = ${registrationTestId.formInputSkill}]`);
    // button
    const skillAddBtn = registerWrapper.find(`[data-testid = ${registrationTestId.addBtn}]`);
    const submitBtn = registerWrapper.find(`[data-testid = ${registrationTestId.submitBtn}]`);
    const resetBtn = registerWrapper.find(`[data-testid = ${registrationTestId.resetBtn}]`);
    // others
    const skillList = registerWrapper.findAll(`[data-testid = ${registrationTestId.skillTag}]`);
    const alertMsg = registerWrapper.find(`[data-testid = ${registrationTestId.alertMessage}]`);

    return {registerForm, nameField, emailField, roleField, skillField, skillAddBtn, submitBtn, resetBtn, skillList, alertMsg};
}

export function listElement(listWrapper) {
    // card
    const profileCard = listWrapper.findAll(`[data-testid = ${listTestId.profileCard}]`);

    // others
    const searchInput = listWrapper.find(`[data-testid = ${listTestId.searchInput}]`);
    const searchBtn = listWrapper.find(`[data-testid = ${listTestId.searchBtn}]`);
    const searchAllBtn = listWrapper.find(`[data-testid = ${listTestId.searchAll}]`);
    const profileFoundTag = listWrapper.find(`[data-testid = ${listTestId.profileFoundTag}]`);

    return {profileCard, searchBtn, searchInput, profileFoundTag, searchAllBtn};
}
