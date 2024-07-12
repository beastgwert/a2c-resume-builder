
const exampleData = {
    personalInfo: {
        name: "beastgert",
        email: "galarblemarble@gmail.com",
        phoneNumber: "469-744-9264",
        address: 'Plano, TX',
        schoolName: 'Plano West Senior High School',
        schoolStart: 2020,
        schoolEnd: 2024,
        gpa: 4.8
    },

    sections: {
        awards: {
            content: [
                {
                    title: "Science Fair Winner",
                    date: "2024-03"
                },
                {
                    title: "AMC 12 Perfect Score",
                    date: "2023-12"
                },
                {
                    title: "Speech and Debate Champion",
                    date: "2022-09"
                }
            ],
            // isEditing is index of current form
            isEditing: -1
        },
        extracurriculars: {
            content: [
                {
                    title: "Computer Club",
                    hoursPerWeek: 5,
                    gradeLevels: "11th - 12th",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    title: "Speech and Debate",
                    hoursPerWeek: 10,
                    gradeLevels: "9th - 12th",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    title: "Community Service",
                    hoursPerWeek: 13,
                    gradeLevels: "9th - 12th",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ],
            isEditing: -1
        }

    }
};

export default exampleData;