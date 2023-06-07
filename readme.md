
# Turing VueJS Challenge (Demo: https://venerable-raindrop-2fdc85.netlify.app/)

Briefing:
Mini Job Portal
Your task is to develop a Mini Job Portal website. The website will be used by both recruiters and job seekers (candidates). The candidates can create a profile on the website by filling in the information in a web form. All the candidate profiles will be visible to recruiters so they can contact the one they find
suitable for the job.

## How to install (Step by step):
* Download the project;
```sh
npm install
npm run serve
npm run test:main
```

## ✨ Features: ✨
- Candidates (job seekers) register on the website by filing in their: name, email, and the role they are applying for. 
- They also must add their skills so that recruiters can find them. The: name, email,and role are required fields 
- Must add at least one skill
- Can't submit the form until the requirement of the form is completed.
- The email of every candidate must be unique.
- Upon successful registration, their profile will be added to the candidate list page, and the recruiters can find their profile in the form of a card.
- The candidate list will have the profile cards of all the registered job seekers.
- The recruiters will be able to search for candidates based on their skills using a search bar.

### Pages :
* Home Page
* Candidate registration page
* Candidate list page
> Note: Each having a navbar

#### Home Page: Route: "/"
* Navbar with the heading "Job Portal"
* Two buttons - Candidate List and Candidate registration will direct the user to the corresponding page. The candidate list button will also show the total candidate profiles in parenthesis.


#### Candidate Registration: Route: "/candidate/registration"
*  A navbar with the heading "Job Portal” and two buttons - Candidate List and Home - will navigate the user to the corresponding pages.
* It will contain a form with label and input fields of "name”, "role”, "email", and "skills", with an add skill button to add skills one by one. When the user adds a skill to the skill input and clicks on add skill button, a tag appears below the input box with the name of the skill the user typed. The form will have a submit button and a Reset button.

* The submit button will be disabled until the name, role, and email fields are empty and no skills have been added.

* If the user registers with an already existing email id, registration will fail, and a registration status. message will be displayed: "email already exists"

* The maximum number of skills that can be added is 5.

* Upon successful registration, a registration status message will be displayed below the form: "candidate profile created"

#### Candidate List: Route: "/candidatelist"
* A navbar with the heading "Job Portal” and two buttons - Candidate Registration and Home - will navigate the user to the corresponding pages.
* It will contain a list of profile cards with the name of the candidate, the role they are interested in, email, and skills in the form of tags.

* A search bar that searches through the list of profile cards based on their skills. For example, if “react” is searched, all profiles with the skill tag "react” should appear.
* All button beside the search button, showing all the available profile cards when clicked
* Afitle that shows the number of profiles found after the search. For example, searching a skill result in 5 profile cards will show " profiles found” and 0 in case of zero profiles found. Initially, it will show the number of total available profile cards.

# Tasks
#### Task 1
* :ballot_box_with_check: - Render Navigation buttons on header as below conditions and Render Header Title "Job Portal on home, list and registration page.
* :ballot_box_with_check: - 1.1 Render Navigation buttons on header as below conditions:
* :ballot_box_with_check: - Home Screen () - does not show any buttons on header.
* :ballot_box_with_check: - Registration Screen (/candidate/registration’) - has "Home' and ‘candidate list 0" button on header
* :ballot_box_with_check: - List Screen (/candidate/list) - has Home' and ‘Candidate Registration’ button on header

* :ballot_box_with_check: - 1.2 Render Header Title “Job Portal’ on home, list, and registration page.
* :ballot_box_with_check: - The Test case ID is missing (you get Test case Id from Test IDs section below)
* :ballot_box_with_check: - Title must be “Job Portal”

* :ballot_box_with_check: - Check if Registration form is rendered or not (name, role, email, skills, submit, reset, add):
* :ballot_box_with_check: - Check if the Test case ID is given to the fields or not and if not please give Test case ID to the controls/elements.
* :ballot_box_with_check: - Check if name, email, role, and skill uses input HTML element
* :ballot_box_with_check: - Check if submit, reset, and skill uses button HTML element

#### Task 2
* :ballot_box_with_check: - 2.1 Add skill button must follow these conditions:
* :ballot_box_with_check: - The Add skill button is disabled until the candidate do not enter value in the skill input field
* :ballot_box_with_check: - The Add skill button is enabled till the candidate has a maximum of 5 skills
* :ballot_box_with_check: - 2.2 Validate Form
* :ballot_box_with_check: - Display error msg for candidate cannot register himself twice using the same email. (email already exists)
* :ballot_box_with_check: - At least one skill s required to register successfully
* :ballot_box_with_check: - Al the fields on the form are required (name, role, email, skills)
* :ballot_box_with_check: - Submit button is disabled until the form is not validated
* :ballot_box_with_check: - 2.3 Click on reset to check form is reset or not



#### Task 3
* :ballot_box_with_check: - 3.1 Registering new candidates and checking the candidate list count is an increase on the header, once the candidate registers himself so candidate list count must be increased
* :ballot_box_with_check: - 3.2 Candidate registration Form s reset after successfully adding a new candidate
* :ballot_box_with_check: - 3.3 On candidate listing page
* :ballot_box_with_check: - All the candidates added in the candidate registration form should be displayed
* :ballot_box_with_check: - The user should be able to perform a search based on skills of the candidate (one skill at a time)
* :ballot_box_with_check: - When the user clicks on "All" button the search text should be cleared and all candidates should be displayed

# Test IDs
> The following section provides a mapping of element and test id:

#### Navbar
* Nav Button - Candidate List - nav-list-btn
* Nav Button - Candidate Registration - nav-registration-btn
* Nav Button - Home - nav-home-btn

##### "Job Portal” title
* title - nav-heading

#### Home Page
* Button - Candidate List - list-btn
* Button - Candidate Registration - registration-btn

#### Candidate Registration Page
* Registration Form - registration-form
* Input field - name - form-input-name
* Input field - email - form-input-email
* Input field - role - form-input-role
* Input field - skills - form-input-skill
* Button - Add skill - add-btn
* Button - Submit : submit-btn
* Button & Reset - reset-btn
* Skill tag in the form - skill-tag
* Registration Status message in the form - alert-message

#### Candidate List Page
* Profile Card - profile-card
* Number of profiles found title - profiles-found-tag
* Input - Search - search-input
* Button Al - search-all