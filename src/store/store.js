import { reactive } from 'vue'

export const candidateStore = reactive({
    candidateList: [],
    addCandidate(email, candidate) {
        if (this.getCandidateByEmail(email)) return false;
        this.candidateList.push(candidate);
        return true;
    },
    candidateCount(){
        return this.candidateList.length;
    },
    searchSkill(searchValue) {
        if (searchValue) {
            const lowerCaseSearchValue = searchValue.toLowerCase().trim();
            return [...new Set(this.candidateList.filter(candidate => candidate.skills.some(skill => skill.toLowerCase().includes(lowerCaseSearchValue))))];
        }

        return this.candidateList;
    },
    getCandidateByEmail(email) {
        const candidates = this.candidateList;
        return candidates.find(candidate => candidate.email === email);
    }
});