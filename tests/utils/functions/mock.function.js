import {generateRandomString} from "./shared.function";

export function generateMockCandidate(noOfCandidate= 20) {
  const mockPost = [];
  let post;
  for (let i = 0; i < noOfCandidate; i++) {
    post = {
      skills: generateSkills(),
      email: `${generateRandomString()}@${generateRandomString()}.${generateRandomString()}`,
      name: generateRandomString(),
      role: generateRandomString(),
    }
    mockPost.push(post);
  }
  return mockPost;
}

export const generateSkills = (noOfVariant= 5) => {
  const mockVariant = [];
  for (let i = 0; i < noOfVariant; i++) {
    mockVariant.push(selectRandomSkills());
  }
  return mockVariant;
};


export const selectRandomSkills = () => {
  const mockSkills = [
    'java',
    'c++',
    'C#',
    'Android',
    'Python',
    'Rust',
    'Fortran',
    'Delphi',
    'Data Science',
    'Lua',
    'C++',
    'Angular',
    'Node.js',
    'AWS'
  ];
  return mockSkills[Math.floor(Math.random() * mockSkills.length)]
}
