import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import router from "@/router";
import { expect, describe, it, beforeEach } from "@jest/globals";
import { route } from "@/router/route";
import { candidateStore } from "@/store/store.js";
import {
  headerElement,
  homeElement,
  registerElement,
  listElement,
} from "./utils/functions/selector.function";
import { generateMockCandidate } from "./utils/functions/mock.function";
import { candidateRegisterView } from "@/views/CandidateRegisterView.vue"; // Import the component

describe("HomeView.vue", () => {
  let homeViewWrapper;

  beforeEach(() => {
    homeViewWrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
  });

  it('1. Home Page: The navbar is rendering with the heading "Job Portal"', async () => {
    const { heading, navHomeBtn, navListBtn, navRegistrationBtn } =
      headerElement(homeViewWrapper);

    expect(heading).toBeTruthy();
    expect(navListBtn.exists()).toBe(false);
    expect(navHomeBtn.exists()).toBe(false);
    expect(navRegistrationBtn.exists()).toBe(false);
  });

  it("2. Home Page: Rendering correctly with two buttons namely candidate list and candidate registration", async () => {
    const { listBtn, registrationBtn } = homeElement(homeViewWrapper);

    expect(registrationBtn.exists()).toBeTruthy();
    expect(listBtn).toBeTruthy();
  });

  it("3. Home Page: initial show candidate List with 0 candidate on List", async () => {
    const { listBtn } = homeElement(homeViewWrapper);
    expect(listBtn.text()).toMatch("0");
  });
});

describe("CandidateRegisterView.vue", () => {
  let AppWrapper;
  // mock data
  let mockData = [];

  async function addSKill(testSkillList) {
    let { skillAddBtn, skillField, skillList } = registerElement(AppWrapper);

    for (const skill of testSkillList) {
      const index = testSkillList.indexOf(skill);

      await skillField.setValue(skill);
      await skillAddBtn.trigger("click");

      skillList = registerElement(AppWrapper).skillList;
      expect(skillList[index].exists()).toBeTruthy();
      expect(skillList[index].text()).toBe(skill);
    }
  }

  async function fillRegisterForm(mockDataList) {
    let {
      skillAddBtn,
      skillField,
      skillList,
      roleField,
      emailField,
      nameField,
      submitBtn,
      alertMsg,
    } = registerElement(AppWrapper);

    for (const mock of mockDataList) {
      await roleField.setValue(mock.role);
      await emailField.setValue(mock.email);
      await nameField.setValue(mock.name);

      // add skill on form
      for (const mockSkill of mock.skills) {
        const skillIndex = mock.skills.indexOf(mockSkill);
        await skillField.setValue(mockSkill);
        await skillAddBtn.trigger("click");

        skillList = registerElement(AppWrapper).skillList;
        expect(skillList[skillIndex].exists()).toBeTruthy();
        expect(skillList[skillIndex].text()).toContain(mockSkill);
      }

      // save button click
      await submitBtn.trigger("click");
      await AppWrapper.vm.$nextTick();
      alertMsg = registerElement(AppWrapper).alertMsg;
      expect(alertMsg.text()).toMatch("candidate profile created");
    }
  }

  beforeEach(async () => {
    router.push(route.register);
    await router.isReady();

    AppWrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    mockData = generateMockCandidate();
  });

  afterAll(() => {
    candidateStore.candidateList = [];
  });

  it('4. Registration Page: The navbar is rendering correctly with the heading "Job Portal"', async () => {
    const { heading } = headerElement(AppWrapper);
    expect(heading.exists()).toBeTruthy();
    expect(heading?.text()).toBe("Job Portal");
  });

  it("5. Registration Page: The navbar do not rendering Candidate Registration Button", async () => {
    const { navHomeBtn, navListBtn, navRegistrationBtn } =
      headerElement(AppWrapper);
    expect(navRegistrationBtn.exists()).not.toBeTruthy();
    expect(navHomeBtn.exists()).toBeTruthy();
    expect(navListBtn.exists()).toBeTruthy();
  });

  it("6. Registration Page: The navbar is rendering correctly navigation button names", async () => {
    const { navHomeBtn, navListBtn } = headerElement(AppWrapper);
    expect(navHomeBtn.exists()).toBeTruthy();
    expect(navListBtn.exists()).toBeTruthy();
    expect(navHomeBtn?.text()).toMatch("Home");
    expect(navListBtn?.text()).toMatch("candidate list");
  });

  it("7. Registering new candidates and checking the candidate list count is an increase on the header or not", async () => {
    await fillRegisterForm(mockData);

    let { skillList } = registerElement(AppWrapper);
    expect(skillList.length).toBe(0);

    let { navListBtn } = headerElement(AppWrapper);
    // check candidate count in header
    expect(navListBtn.text()).toMatch(`${mockData.length}`);
  });

  it("8. Registration Page: The registration form is rendered correctly with all required fields and buttons", async () => {
    // const { navHomeBtn, navListBtn } = headerElement(AppWrapper);
    const {
      skillAddBtn,
      skillField,
      roleField,
      emailField,
      nameField,
      submitBtn,
      resetBtn,
    } = registerElement(AppWrapper);
  
    // Check if the form fields exist and have the expected attributes
    expect(nameField.exists()).toBeTruthy();
    expect(nameField.element.tagName).toBe('INPUT');

    expect(emailField.exists()).toBeTruthy();
    expect(emailField.element.tagName).toBe('INPUT');

    expect(roleField.exists()).toBeTruthy();
    expect(roleField.element.tagName).toBe('INPUT');

    expect(skillField.exists()).toBeTruthy();
    expect(skillField.element.tagName).toBe('INPUT');

    // Check if the buttons exist and have the expected attributes
    expect(skillAddBtn.exists()).toBeTruthy();
    expect(skillAddBtn.element.tagName).toBe('BUTTON');

    expect(submitBtn.exists()).toBeTruthy();
    expect(submitBtn.element.tagName).toBe('BUTTON');

    expect(resetBtn.exists()).toBeTruthy();
    expect(resetBtn.element.tagName).toBe('BUTTON');
  });
});

describe("CandidateList.vue", () => {
  let appView;
  // mock data
  let mockData = [];

  beforeEach(async () => {
    router.push(route.list);
    await router.isReady();

    appView = mount(App, {
      global: {
        plugins: [router],
      },
    });
  });
  mockData = generateMockCandidate();

  async function fillRegisterForm(mockDataList) {
    let {
      skillAddBtn,
      skillField,
      skillList,
      roleField,
      emailField,
      nameField,
      submitBtn,
      alertMsg,
    } = registerElement(appView);

    for (const mock of mockDataList) {
      await roleField.setValue(mock.role);
      await emailField.setValue(mock.email);
      await nameField.setValue(mock.name);

      // add skill on form
      for (const mockSkill of mock.skills) {
        const skillIndex = mock.skills.indexOf(mockSkill);
        await skillField.setValue(mockSkill);
        await skillAddBtn.trigger("click");

        skillList = registerElement(appView).skillList;
        expect(skillList[skillIndex].exists()).toBeTruthy();
        expect(skillList[skillIndex].text()).toBe(mockSkill);
      }

      // save button click
      await submitBtn.trigger("click");
      alertMsg = registerElement(appView).alertMsg;
      expect(alertMsg.text()).toMatch("candidate profile created");
    }
  }

  function searchCandidate(searchValue) {
    return mockData.filter((profile) => {
      return profile.skills.some((skill) =>
        skill
          .toLowerCase()
          .includes(searchValue.toLowerCase().replace(/\s+/g, ""))
      );
    });
  }

  it('9. Candidate list page: The navbar is rendering correctly with the heading "Job Portal"', async () => {
    const { heading } = headerElement(appView);
    expect(heading.exists()).toBeTruthy();
    expect(heading?.text()).toBe("Job Portal");
  });

  it("10. Candidate list page: The navbar do not rendering Candidate List Button", async () => {
    const { navHomeBtn, navListBtn, navRegistrationBtn } =
      headerElement(appView);
    expect(navRegistrationBtn.exists()).toBeTruthy();
    expect(navHomeBtn.exists()).toBeTruthy();
    expect(navListBtn.exists()).not.toBeTruthy();
  });

  it("11. Candidate list page: The navbar is rendering correctly navigation button names", async () => {
    const { navHomeBtn, navRegistrationBtn } = headerElement(appView);
    expect(navHomeBtn.exists()).toBeTruthy();
    expect(navHomeBtn?.text()).toMatch("Home");
    expect(navRegistrationBtn.exists()).toBeTruthy();
    expect(navRegistrationBtn?.text()).toMatch("Candidate Registration");
  });
});
