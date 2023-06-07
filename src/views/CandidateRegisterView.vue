<script>
import { candidateStore } from '@/store/store.js';
export default {
  data() {
    return {
      candidateStore,
      candidate:{
        name: '',
        role: '',
        email: '',
        skills: []
      },
      skillInput: '',
      alert : undefined
    }
  },

  computed: {
    isFormValid() {
      return (
        this.candidate.name.trim() !== '' &&
        this.candidate.role.trim() !== '' &&
        this.candidate.email.trim() !== '' &&
        this.candidate.skills.length > 0
      );
    },
    isAddSkillDisabled() {
      return this.skillInput.trim() === '' || this.candidate.skills.length >= 5;
    },
    isMaxSkillsReached() {
      return this.candidate.skills.length >= 5;
    },
    isSkillsEmpty() {
      return this.candidate.skills.length === 0;
    }
  }, 

  methods: {
    addCandidate(event) {
      event.preventDefault();
      if (this.isSkillsEmpty) {
        this.alert = {
          message: 'At least one skill must be added.',
          type: 'error'
        };
        return;
      }
      
      this.alert = undefined;
      const isCandidateAdded = candidateStore.addCandidate(this.candidate.email, this.candidate);

      if(isCandidateAdded){
        this.resetCandidate();
        this.alert = {
          message: 'candidate profile created!',
          type: "success"
        };
      } else {
        this.alert = {
          message: 'email already exists',
          type: "error"
        }
      }
    },
    resetCandidate(){
      this.candidate = {
        name: '',
        role: '',
        email: '',
        skills: []
      };
      this.skillInput = '';
    },

    resetClick(event){
      event.preventDefault();
      this.resetCandidate();
      this.alert = undefined;
    },

    addSkill(event){
      event.preventDefault();

      if (this.isAddSkillDisabled) {
        if (this.isMaxSkillsReached) {
          this.alert = {
            message: 'Maximum limit of 5 skills reached.',
            type: 'error'
          };
        }
        return;
      }

      this.candidate.skills.push(this.skillInput);
      this.skillInput = '';
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-center">
    <form data-testid="registration-form" class="form">
      <label>Name:</label>
      <input v-model="candidate.name" data-testid="form-input-name"  type="text"/>
      <label>Role:</label>
      <input v-model="candidate.role" data-testid="form-input-role"  type="text"/>
      <label>Email:</label>
      <input v-model="candidate.email" data-testid="form-input-email"  type="email"/>
      <label>Skills (max 5):</label>
      <div class="skills">
        <div class="skill-input">
          <input v-model="skillInput" data-testid="form-input-skill" type="text" maxLength="100"/>
          <button data-testid="add-btn" class="btn-prm" @click="addSkill" :disabled="isAddSkillDisabled">Add</button>
        </div>
        <div class="skill-list">
          <div v-bind:key="skill" v-for="skill in candidate.skills" data-testid="skill-tag" class="skilltag">{{candidate.skills}}</div>
        </div>
      </div>
      <p data-testid="alert-message" class="message" v-if="alert" v-bind:class="alert.type">{{alert.message}}</p>
      <button @click="addCandidate" data-testid="submit-btn" class="btn-prm" :class="{ 'disabled': !isFormValid }" type="submit">Submit</button>
      <button @click="resetClick" data-testid="reset-btn" class="btn-prm" type="submit">Reset</button>

    </form>
  </div>
</template>

<style>
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
