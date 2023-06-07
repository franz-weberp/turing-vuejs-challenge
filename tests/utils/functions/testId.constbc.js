import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import { expect, describe, it, beforeEach } from "@jest/globals";
import { route } from "@/router/route";
import { candidateStore } from "@/store/store.js";

describe("Navbar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
  });

  it('renders "Candidate List" nav button', () => {
    const navButton = wrapper.find('[data-testid="nav-list-btn"]');
    expect(navButton.exists()).toBe(true);
  });

  it('renders "Candidate Registration" nav button', () => {
    const navButton = wrapper.find('[data-testid="nav-registration-btn"]');
    expect(navButton.exists()).toBe(true);
  });

  it('renders "Home" nav button', () => {
    const navButton = wrapper.find('[data-testid="nav-home-btn"]');
    expect(navButton.exists()).toBe(true);
  });

  it('renders "Job Portal" title in navbar', () => {
    const heading = wrapper.find('[data-testid="nav-heading"]');
    expect(heading.exists()).toBe(true);
  });
});

describe("Home Page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
  });

  it('renders "Candidate List" button', () => {
    const button = wrapper.find('[data-testid="list-btn"]');
    expect(button.exists()).toBe(true);
  });

  it('renders "Candidate Registration" button', () => {
    const button = wrapper.find('[data-testid="registration-btn"]');
    expect(button.exists()).toBe(true);
  });
});

describe("Candidate Registration Page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
  });

  it('renders registration form', () => {
    const form = wrapper.find('[data-testid="registration-form"]');
    expect(form.exists()).toBe(true);
  });

  it('renders input field - name', () => {
    const input = wrapper.find('[data-testid="form-input-name"]');
    expect(input.exists()).toBe(true);
  });

  it('renders input field - email', () => {
    const input = wrapper.find('[data-testid="form-input-email"]');
    expect(input.exists()).toBe(true);
  });

  it('renders input field - role', () => {
    const input = wrapper.find('[data-testid="form-input-role"]');
    expect(input.exists()).toBe(true);
  });

  it('renders input field - skills', () => {
    const input = wrapper.find('[data-testid="form-input-skill"]');
    expect(input.exists()).toBe(true);
  });

  it('renders "Add skill" button', () => {
    const button = wrapper.find('[data-testid="add-btn"]');
    expect(button.exists()).toBe(true);
  });

  it('renders "Submit" button', () => {
    const button = wrapper.find('[data-testid="submit-btn"]');
    expect(button.exists()).toBe(true);
  });

  it('renders "Reset" button', () => {
    const button = wrapper.find('[data-testid="reset-btn"]');
    expect(button.exists()).toBe(true);
  });

  it('renders skill tag in the form', () => {
    const skillTag = wrapper.find('[data-testid="skill-tag"]');
    expect(skillTag.exists()).toBe(true);
  });

  it('renders registration status message in the form', () => {
    const message = wrapper.find('[data-testid="alert-message"]');
    expect(message.exists()).toBe(true);
  });
});

describe("Candidate List Page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        plugins: [router],
        mocks: {
          $store: candidateStore,
        },
      },
    });
  });

  it('renders profile card', () => {
    const card = wrapper.find('[data-testid="profile-card"]');
    expect(card.exists()).toBe(true);
  });

  it('renders "Number of profiles found" title', () => {
    const title = wrapper.find('[data-testid="profiles-found-tag"]');
    expect(title.exists()).toBe(true);
  });

  it('renders search input', () => {
    const input = wrapper.find('[data-testid="search-input"]');
    expect(input.exists()).toBe(true);
  });

  it('renders "Search All" button', () => {
    const button = wrapper.find('[data-testid="search-all"]');
    expect(button.exists()).toBe(true);
  });
});