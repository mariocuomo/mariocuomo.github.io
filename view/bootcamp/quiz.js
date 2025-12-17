// Questions data embedded directly to avoid CORS issues
const quizData = {
    "title": "FY26 Security Copilot - Developer Experience LevelUp (L300) Workshop",
    "description": "Test your knowledge about custom plugins, skills, and extensibility",
    "questions": [
        {
            "id": 1,
            "question": "What is a custom plugin in Security Copilot?",
            "options": [
                "A user interface theme",
                "An extension that adds new capabilities through external integrations",
                "A security policy template",
                "A pre-built Microsoft feature"
            ],
            "correctAnswer": 1,
            "explanation": "A custom plugin is an extension that adds new capabilities to Security Copilot by integrating with external services, APIs, or data sources. It's not a UI theme, policy template, or pre-built feature, but rather a way to extend functionality beyond what's provided out-of-the-box.",
            "hint": "Think about what 'plugin' means in software - it's usually something that extends functionality."
        },
        {
            "id": 2,
            "question": "Which type of custom skill allows you to execute KQL queries in Security Copilot?",
            "options": [
                "API skill",
                "Logic App skill",
                "KQL skill",
                "GPT skill"
            ],
            "correctAnswer": 2,
            "explanation": "KQL skills are specifically designed to execute Kusto Query Language queries against data sources including Azure Data Explorer (ADX), Log Analytics Workspaces, and Microsoft Defender. API skills call REST endpoints, Logic App skills trigger workflows, and GPT skills use language models for analysis.",
            "hint": "The answer is in the question - look for the skill type that matches the query language mentioned."
        },
        {
            "id": 3,
            "question": "What is required to create a custom API skill in Security Copilot?",
            "options": [
                "Only a URL endpoint",
                "An OpenAPI specification file and authentication details",
                "A PowerShell script",
                "A Microsoft certification"
            ],
            "correctAnswer": 1,
            "explanation": "Creating a custom API skill requires an OpenAPI specification file (describing the API structure) and authentication details to securely connect to the external service. A URL alone is insufficient, and PowerShell scripts or certifications are not required.",
            "hint": "APIs need two things: a description of their structure and a way to authenticate securely."
        },
        {
            "id": 4,
            "question": "What is the primary purpose of a Logic App skill in Security Copilot?",
            "options": [
                "To run machine learning models",
                "To orchestrate complex workflows and integrate with Azure services",
                "To store logs",
                "To replace built-in skills"
            ],
            "correctAnswer": 1,
            "explanation": "Logic App skills enable orchestration of complex workflows and integration with Azure services through hundreds of connectors. They don't run ML models directly, store logs, or replace built-in skills but complement them with automation capabilities.",
            "hint": "Logic Apps are known for connecting different services together and automating processes."
        },
        {
            "id": 5,
            "question": "Which authentication methods are supported for custom API plugins?",
            "options": [
                "Only Basic Authentication",
                "Only OAuth 2.0",
                "API Key, Basic Auth, OAuth 2.0, and AADDelegated",
                "No authentication required"
            ],
            "correctAnswer": 2,
            "explanation": "Security Copilot supports multiple authentication methods including API Key, Basic Authentication, OAuth 2.0, and AAD Delegated authentication. This flexibility allows integration with various external services that use different authentication schemes.",
            "hint": "Security Copilot supports multiple authentication methods, not just one."
        },
        {
            "id": 6,
            "question": "Does Security Copilot expose APIs for programmatic access?",
            "options": [
                "No, only UI access is available",
                "Yes, through Microsoft Graph API (currently in beta)",
                "Only through PowerShell cmdlets",
                "Only for Microsoft internal use"
            ],
            "correctAnswer": 1,
            "explanation": "Security Copilot exposes APIs through Microsoft Graph API (currently in beta). These APIs allow programmatic access to retrieve plugin lists, submit prompts to Security Copilot, and use Export Admin APIs to export prompts and evaluations.",
            "hint": "Microsoft Graph is the unified API gateway for Microsoft 365 and related services."
        },
        {
            "id": 7,
            "question": "How can you invoke a custom KQL skill in Security Copilot?",
            "options": [
                "Through natural language prompts only",
                "By uploading a file",
                "Through DirectSkillInvocation and natural language prompts",
                "Only through REST API"
            ],
            "correctAnswer": 2,
            "explanation": "Custom KQL skills can be invoked through DirectSkillInvocation (explicit skill calling) or natural language prompts that the AI interprets and routes to the appropriate skill. File upload and REST API are not the primary invocation methods.",
            "hint": "Skills can be called explicitly or the AI can understand when to use them from natural language."
        },
        {
            "id": 8,
            "question": "What is a custom promptbook in Security Copilot?",
            "options": [
                "A training manual for users",
                "A collection of custom prompts and skills organized for specific workflows",
                "A log of all queries",
                "A security policy document"
            ],
            "correctAnswer": 1,
            "explanation": "A custom promptbook is a collection of pre-configured prompts and skills organized to guide users through specific security workflows. It's not a training manual, query log, or policy document, but rather an automation tool for repeatable processes.",
            "hint": "Think of it as a 'playbook' but for prompts - a collection of steps to follow."
        },
        {
            "id": 9,
            "question": "Which format is used to define custom API plugins?",
            "options": [
                "Only OpenAPI specification",
                "JSON/YAML manifest file plus OpenAPI specification",
                "XML configuration",
                "Plain text file"
            ],
            "correctAnswer": 1,
            "explanation": "Custom API plugins require both a JSON/YAML manifest file (defining plugin metadata and configuration) and an OpenAPI specification (describing the API endpoints and operations). Both components work together to fully define the plugin.",
            "hint": "You need both the Security Copilot manifest and the API specification - two files working together."
        },
        {
            "id": 10,
            "question": "What is a GPT skill in Security Copilot?",
            "options": [
                "A skill that uses GPT models to enhance analysis with custom prompts",
                "A graphics processing tool",
                "A user training module",
                "A data storage method"
            ],
            "correctAnswer": 0,
            "explanation": "A GPT skill leverages GPT language models with custom prompts to perform specialized analysis or generate insights. It's not related to graphics processing, training modules, or data storage.",
            "hint": "GPT stands for Generative Pre-trained Transformer - it's about AI language models."
        },
        {
            "id": 11,
            "question": "What approach allows combining data from multiple sources in a single custom skill?",
            "options": [
                "Each skill must access only one source",
                "Using Logic Apps or custom API orchestration layers",
                "Only through built-in Microsoft connectors",
                "It's not possible to combine sources"
            ],
            "correctAnswer": 1,
            "explanation": "Logic Apps or custom API orchestration layers can aggregate and combine data from multiple sources before returning results to Security Copilot. This allows creating comprehensive skills that provide unified insights from diverse data sources.",
            "hint": "You need something in the middle to orchestrate and combine data from different places."
        },
        {
            "id": 12,
            "question": "What is required to deploy a custom plugin to your organization?",
            "options": [
                "Owner role in Security Copilot",
                "Any user can deploy plugins",
                "Only Microsoft can deploy plugins",
                "A paid subscription only"
            ],
            "correctAnswer": 0,
            "explanation": "Deploying custom plugins requires the Owner role in Security Copilot to ensure proper governance and security controls. Regular users cannot deploy plugins, and Microsoft involvement is not required for custom plugin deployment.",
            "hint": "Deploying plugins is a privileged operation - only administrators can do it."
        },
        {
            "id": 13,
            "question": "What capabilities do Security Copilot Graph APIs provide?",
            "options": [
                "Only user authentication",
                "Retrieve plugin lists and submit prompts to Security Copilot",
                "Only logging and monitoring",
                "Database management"
            ],
            "correctAnswer": 1,
            "explanation": "Security Copilot Graph APIs (in beta) provide capabilities to retrieve lists of available plugins and submit prompts programmatically to Security Copilot. This enables automation and integration with other systems beyond the UI.",
            "hint": "Graph APIs allow you to interact with Security Copilot programmatically, not just through the UI."
        },
        {
            "id": 14,
            "question": "Given this skill manifest, what happens when you ask Security Copilot: 'Show me defender alerts with low and medium severity'?\n\nSkills:\n  - Name: GetAlertsWithASeverity\n    DisplayName: Defender Alerts with a specific severity\n    Description: Defender Alerts with a specific severity\n    Inputs:\n      - Name: severity\n        Description: The alert severity\n        Required: true\n    Settings:\n      Target: Defender\n      Template: |-\n        AlertInfo\n        | where Severity == '{{severity}}'",
            "options": [
                "The skill works correctly and shows alerts with Low and Medium severity",
                "The skill generates a syntactically correct but semantically wrong query: Severity == 'low and medium'",
                "Security Copilot refuses the request",
                "The skill is not invoked"
            ],
            "correctAnswer": 1,
            "explanation": "Security Copilot interprets 'low and medium severity' as a single string value and generates the query 'where Severity == \"low and medium\"' instead of 'where Severity in (\"Low\", \"Medium\")' or using an OR condition. The query is syntactically correct but semantically wrong, resulting in no matches because no alert has a severity value of 'low and medium' as a single string. This demonstrates the importance of clear parameter descriptions and potentially using multiple parameters or better prompt engineering in the DescriptionForModel field.",
            "hint": "The AI takes 'low and medium' as a literal string value, not as two separate values."
        },
        {
            "id": 15,
            "question": "Can Logic App skills trigger automated remediation actions?",
            "options": [
                "No, they are read-only",
                "Yes, they can execute actions like isolating devices or blocking IPs",
                "Only with manual approval",
                "Only for cloud resources"
            ],
            "correctAnswer": 1,
            "explanation": "Logic App skills can execute automated remediation actions such as isolating compromised devices, blocking malicious IPs, or triggering response workflows. They're not limited to read-only operations and can work across cloud and on-premises resources.",
            "hint": "Logic Apps can perform actions, not just read data - they can change things."
        },
        {
            "id": 16,
            "question": "What is an Agent in Security Copilot context?",
            "options": [
                "A human security analyst",
                "An autonomous AI entity that can use skills to complete complex tasks",
                "A network monitoring tool",
                "A data backup system"
            ],
            "correctAnswer": 1,
            "explanation": "An Agent is an autonomous AI entity that can orchestrate multiple skills and actions to complete complex tasks without continuous human intervention. It's not a human analyst, monitoring tool, or backup system.",
            "hint": "Agents in AI are autonomous entities that can work independently to accomplish goals."
        },
        {
            "id": 17,
            "question": "How are custom plugins typically tested in Security Copilot?",
            "options": [
                "Through automated testing frameworks",
                "In production environment or via manual code review",
                "Using a dedicated sandbox environment",
                "Testing is not required"
            ],
            "correctAnswer": 1,
            "explanation": "Custom plugins are typically tested in the production environment or through manual code review. While this may seem risky, it's the current approach as Security Copilot doesn't provide a dedicated sandbox environment for plugin testing.",
            "hint": "Currently, there's no separate testing environment for plugins - it's production or manual review."
        },
        {
            "id": 18,
            "question": "What is the purpose of the Export Admin API in Security Copilot?",
            "options": [
                "To export user profiles",
                "To export prompts and evaluations for backup and analysis",
                "To export security policies",
                "To export network configurations"
            ],
            "correctAnswer": 1,
            "explanation": "The Export Admin API allows administrators to export prompts and evaluations from Security Copilot. This is useful for backup, compliance, audit purposes, and analyzing usage patterns across the organization.",
            "hint": "This API is for administrators who need to extract data for compliance or analysis purposes."
        },
        {
            "id": 19,
            "question": "Which HTTP methods does Security Copilot support for custom API skills?",
            "options": [
                "All HTTP methods (GET, POST, PUT, DELETE, PATCH)",
                "Only GET and POST methods",
                "Only GET method",
                "Only POST method"
            ],
            "correctAnswer": 1,
            "explanation": "Security Copilot currently supports only GET and POST HTTP methods for custom API skills. This limitation means that skills requiring PUT, DELETE, or PATCH operations need to use workarounds or Logic Apps.",
            "hint": "Not all HTTP verbs are supported - only the two most common ones for reading and creating."
        },
        {
            "id": 20,
            "question": "What does MCP stand for in Security Copilot extensibility?",
            "options": [
                "Microsoft Cloud Platform",
                "Model Context Protocol",
                "Multi-Channel Processing",
                "Managed Capability Provider"
            ],
            "correctAnswer": 1,
            "explanation": "MCP stands for Model Context Protocol, a standardized interface that allows AI agents like Security Copilot to connect with external tools and data sources. It provides a consistent way to extend capabilities through external integrations.",
            "hint": "MCP is a protocol - a standardized way for AI models to communicate with external systems."
        },
        {
            "id": 21,
            "question": "What is wrong that blocks the correct upload of this manifest?\n\nDescriptor:\n  Name: FetchAlerts\n  DisplayName: Fetch Security Alerts\n  Description: Query security alerts\n\nSkillGroups:\n  - Format: KQL\n    Skills:\n      - Name: GetAlerts\n        DisplayName: Get Alerts\n        Description: Fetch alerts\n        Inputs:\n          - Name: severity\n            Description: Alert severity\n            Required: false\n          - Name: timeRange\n            Description: Time range\n            Required: false\n        Settings:\n          Target: Defender\n          Template: |-\n            AlertInfo\n            | where Severity == 'High'\n            | top 50 by Timestamp desc",
            "options": [
                "Nothing is wrong",
                "The 'severity' and 'timeRange' parameters are declared but never used in the Template",
                "Target should be 'Sentinel'",
                "DisplayName is missing"
            ],
            "correctAnswer": 0,
            "explanation": "Nothing is wrong that blocks the upload. While having unused parameters ('severity' and 'timeRange' declared but not used in the Template) is not a best practice, it does NOT prevent the manifest from being uploaded or installed. The manifest is syntactically valid and Security Copilot will accept it. The unused parameters are simply ignored. This is a common mistake - confusing bad practices with actual blocking errors.",
            "hint": "Focus on the question: it's not asking about best practices, but what completely blocks the plugin installation."
        },
        {
            "id": 22,
            "question": "What important field is missing from this manifest?\n\nDescriptor:\n  Name: SentinelIncidentComments\n  DisplayName: Fetch Sentinel Incident Comments\n  Description: Pullback Sentinel incident comments\n\nSkillGroups:\n  - Format: KQL\n    Skills:\n      - Name: GetIncidentComments\n        DisplayName: Fetch Comments\n        Description: Fetch incident comments\n        Inputs:\n          - Name: incidentNumber\n            Description: incident number\n            Required: true\n        Settings:\n          Target: Sentinel\n          Template: |-\n            SecurityIncident\n            | where IncidentNumber == '{{incidentNumber}}'\n            | project Comments",
            "options": [
                "DisplayName",
                "DescriptionForModel in Descriptor and Skill sections",
                "Version",
                "Author"
            ],
            "correctAnswer": 1,
            "explanation": "The manifest is missing 'DescriptionForModel' both in the Descriptor section and in the Skill definition. This field is highly recommended as it provides context to the AI model about when and how to use this skill. DescriptionForModel should be added in both locations: at the Descriptor level for the overall plugin purpose and at the Skill level for individual skill usage. Without it, the model may not understand when to invoke this skill appropriately.",
            "hint": "There's a special field that helps the AI understand when to use the skill - it's for the model, not humans."
        },
        {
            "id": 23,
            "question": "What is the error in this Defender KQL skill manifest?\n\nDescriptor:\n  Name: SampleDefenderKQL\n  DisplayName: M365 Email Query\n  Description: Query email logs in M365\n\nSkillGroups:\n  - Format: KQL\n    Skills:\n      - Name: GetLatestEmailsByRecipient\n        DisplayName: Get Latest Emails\n        Description: Fetches latest emails by recipient\n        Inputs:\n          - Name: email\n            Description: Recipient email address\n            Required: true\n        Settings:\n          Target: Advanced Hunting\n          Template: |-\n            EmailEvents\n            | where RecipientEmailAddress =~ '{{email}}'\n            | top 100 by Timestamp desc",
            "options": [
                "There is no error",
                "Target should be 'Defender' not 'Advanced Hunting'",
                "Target should be 'M365Defender'",
                "Template syntax is incorrect"
            ],
            "correctAnswer": 1,
            "explanation": "The Target field is incorrect. For Defender KQL skills that query Advanced Hunting tables (like EmailEvents), the Target must be set to 'Defender', not 'Advanced Hunting'. While Advanced Hunting is the feature name, 'Defender' is the required data source identifier in the manifest.",
            "hint": "The Target value must be the data source identifier, not the feature name shown in the UI."
        },
        {
            "id": 24,
            "question": "In a plugin manifest, what happens if the OpenAPI specification URL is incorrect or unreachable?",
            "options": [
                "The plugin installs but skills won't work",
                "The plugin fails to install or validate",
                "Security Copilot uses a cached version",
                "The plugin works with limited functionality"
            ],
            "correctAnswer": 1,
            "explanation": "If the OpenAPI specification URL is incorrect or unreachable, the plugin will fail to install or validate. Security Copilot requires access to the OpenAPI spec to understand the API structure, endpoints, and parameters before allowing plugin deployment.",
            "hint": "The OpenAPI spec is required during installation - without it, the plugin can't be validated."
        },
        {
            "id": 25,
            "question": "Through which methods can you interact with Security Copilot?",
            "options": [
                "Standalone experience and Embedded experiences only",
                "API and Logic Apps only",
                "Power Automate and Standalone only",
                "All of the above: Standalone, Embedded, Logic Apps, Power Automate, and API"
            ],
            "correctAnswer": 3,
            "explanation": "Security Copilot offers multiple interaction methods: Standalone experience (dedicated portal), Embedded experiences (within other Microsoft security products), Logic Apps (for workflow automation), Power Automate (for low-code automation), and API (for programmatic access via Microsoft Graph). This flexibility allows organizations to integrate Security Copilot into their existing workflows and tools.",
            "hint": "Microsoft designed Security Copilot to be accessible through various channels to fit different workflows and use cases."
        }
    ]
};

let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let userName = '';

// Category mapping for questions
const questionCategories = {
    "Custom Plugins & Skills": [1, 2, 3, 4, 5, 7, 8, 9, 10, 11],  // Plugin types, skill creation, manifest basics, GPT, orchestration
    "Manifest Troubleshooting": [14, 21, 22, 23, 24],  // Manifest errors, template issues, parameter usage, Target fields
    "Authentication & APIs": [5, 6, 13, 18, 19, 25],  // Auth methods, Graph APIs, Export APIs, HTTP methods, interaction methods
    "Advanced Concepts": [12, 15, 16, 17, 20]  // Agents, MCP, deployment, testing, Logic App actions
};

const motivationalMessages = [
    "🚀 You're doing great! Keep it up!",
    "💪 Excellent progress! You're halfway there!",
    "⭐ Amazing! You're on fire!",
    "🎯 Keep focusing! You've got this!",
    "🌟 Outstanding! Almost at the finish line!",
    "💡 Great work! Your knowledge is showing!",
    "🔥 Impressive! You're crushing it!",
    "✨ Fantastic! Keep that momentum going!",
    "🎓 Brilliant! You know your manifests!",
    "⚡ Superb! Your expertise is evident!"
];

// Show custom dialog
function showDialog(title, message) {
    document.getElementById('dialog-title').textContent = title;
    document.getElementById('dialog-message').textContent = message;
    document.getElementById('custom-dialog-overlay').classList.add('show');
}

// Close custom dialog
function closeDialog() {
    document.getElementById('custom-dialog-overlay').classList.remove('show');
}

// Initialize the quiz
function startQuiz() {
    // Get user name
    const nameInput = document.getElementById('user-name');
    userName = nameInput.value.trim();
    
    if (!userName) {
        showDialog('⚠️ Name Required', 'Please enter your name before starting the quiz.');
        nameInput.focus();
        return;
    }
    
    // Hide welcome hint bubble
    const hintBubble = document.getElementById('hint-bubble');
    if (hintBubble) {
        hintBubble.classList.remove('show');
    }
    
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('quiz-container').classList.add('show');
    document.getElementById('quiz-title').textContent = quizData.title;
    document.getElementById('quiz-description').textContent = quizData.description;
    currentQuestion = 0;
    userAnswers = new Array(quizData.questions.length).fill(null);
    score = 0;
    createQuestionNavigation();
    displayQuestion();
}

// Create question navigation grid
function createQuestionNavigation() {
    const navContainer = document.getElementById('question-navigation');
    navContainer.innerHTML = '';
    
    quizData.questions.forEach((q, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'question-nav-item';
        navItem.textContent = index + 1;
        navItem.onclick = () => goToQuestion(index);
        navContainer.appendChild(navItem);
    });
}

// Display current question
function displayQuestion() {
    const question = quizData.questions[currentQuestion];
    const questionContainer = document.getElementById('question-container');
    
    // Show motivational message at specific intervals
    showMotivationalMessage();
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    // Format question text with code blocks
    const formattedQuestion = formatQuestionWithCode(question.question);
    
    // Update hint content in instructor badge
    updateHintContent(question.hint);
    
    // Build question HTML
    let html = `
        <div class="question-number">Question ${currentQuestion + 1} of ${quizData.questions.length}</div>
        <div class="question-text">${formattedQuestion}</div>
        <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        const isSelected = userAnswers[currentQuestion] === index;
        html += `
            <label class="option ${isSelected ? 'selected' : ''}" onclick="selectOption(${index})">
                <input type="radio" name="answer" value="${index}" ${isSelected ? 'checked' : ''}>
                <span class="option-text">${option}</span>
            </label>
        `;
    });
    
    html += '</div>';
    questionContainer.innerHTML = html;
    
    // Update button states
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    
    const nextBtn = document.getElementById('next-btn');
    if (currentQuestion === quizData.questions.length - 1) {
        nextBtn.textContent = 'Finish';
        nextBtn.classList.remove('btn-primary');
        nextBtn.classList.add('btn-primary');
    } else {
        nextBtn.textContent = 'Next';
    }
    
    updateQuestionNavigation();
}

// Update hint content in bubble
function updateHintContent(hintText) {
    const hintBubble = document.getElementById('hint-bubble');
    if (hintBubble) {
        hintBubble.textContent = hintText;
        hintBubble.classList.remove('show'); // Hide when changing questions
    }
}

// Toggle hint visibility
function toggleHint() {
    const hintBubble = document.getElementById('hint-bubble');
    if (hintBubble) {
        hintBubble.classList.toggle('show');
    }
}

// Handle option selection
function selectOption(index) {
    userAnswers[currentQuestion] = index;
    displayQuestion();
}

// Go to next question
function nextQuestion() {
    if (userAnswers[currentQuestion] === null) {
        showDialog('⚠️ Answer Required', 'Please select an answer before proceeding.');
        return;
    }
    
    if (currentQuestion < quizData.questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        // Check if all questions have been answered
        const unansweredCount = userAnswers.filter(answer => answer === null).length;
        if (unansweredCount > 0) {
            showDialog('⚠️ Incomplete Quiz', `You have ${unansweredCount} unanswered question${unansweredCount > 1 ? 's' : ''}. Please answer all questions before finishing the quiz.`);
            return;
        }
        finishQuiz();
    }
}

// Go to previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

// Jump to specific question
function goToQuestion(questionIndex) {
    currentQuestion = questionIndex;
    displayQuestion();
    updateQuestionNavigation();
}

// Update question navigation indicators
function updateQuestionNavigation() {
    const navItems = document.querySelectorAll('.question-nav-item');
    navItems.forEach((item, index) => {
        item.classList.remove('active', 'answered');
        if (index === currentQuestion) {
            item.classList.add('active');
        } else if (userAnswers[index] !== null) {
            item.classList.add('answered');
        }
    });
}

// Show motivational message at key milestones
function showMotivationalMessage() {
    const messageElement = document.getElementById('motivational-message');
    const milestones = [5, 10, 15, 20]; // Show at questions 5, 10, 15, and 20
    
    if (milestones.includes(currentQuestion)) {
        const messageIndex = Math.floor(Math.random() * motivationalMessages.length);
        messageElement.textContent = motivationalMessages[messageIndex];
        messageElement.style.display = 'block';
        
        // Hide after 3 seconds
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 3000);
    } else {
        messageElement.style.display = 'none';
    }
}

// Format question text to wrap YAML code in proper HTML tags
function formatQuestionWithCode(questionText) {
    // Check if question contains YAML manifest (starts with Descriptor: or Skills:)
    if (questionText.includes('Descriptor:') || questionText.includes('Skills:')) {
        const parts = questionText.split('\n\n');
        const mainQuestion = parts[0];
        const codeBlock = parts.slice(1).join('\n\n');
        
        if (codeBlock) {
            const highlightedCode = highlightYaml(codeBlock);
            return `${mainQuestion}<pre><code class="yaml-code">${highlightedCode}</code></pre>`;
        }
    }
    return questionText.replace(/\n/g, '<br>');
}

// Apply syntax highlighting to YAML code
function highlightYaml(yaml) {
    const lines = yaml.split('\n');
    const highlightedLines = lines.map(line => {
        let escaped = escapeHtml(line);
        
        // Highlight YAML keys after list dash (e.g., "- Name: value")
        escaped = escaped.replace(
            /^(\s*)(-)(\s+)([A-Za-z][A-Za-z0-9_]*)(\s*)(:)(.*)$/,
            '$1-$3<span class="yaml-key">$4</span>$5:$7'
        );
        
        // Highlight YAML keys at line start (e.g., "Name: value")
        escaped = escaped.replace(
            /^(\s*)([A-Za-z][A-Za-z0-9_]*)(\s*)(:)(.*)$/,
            '$1<span class="yaml-key">$2</span>$3:$5'
        );
        
        return escaped;
    });
    
    return highlightedLines.join('\n');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Calculate score and show results
function finishQuiz() {
    score = 0;
    
    userAnswers.forEach((answer, index) => {
        if (answer === quizData.questions[index].correctAnswer) {
            score++;
        }
    });
    
    const percentage = Math.round((score / quizData.questions.length) * 100);
    const incorrectCount = quizData.questions.length - score;
    
    // Hide quiz, show results
    document.getElementById('quiz-container').classList.remove('show');
    document.getElementById('result-container').classList.add('show');
    
    // Update result display
    document.getElementById('score-display').textContent = `${score}/${quizData.questions.length}`;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('incorrect-count').textContent = incorrectCount;
    document.getElementById('percentage').textContent = percentage;
    
    // Update result message based on score
    let message = '';
    if (percentage >= 90) {
        message = '🎉 Outstanding! You\'re a Security Copilot Expert!';
    } else if (percentage >= 75) {
        message = '👏 Great job! You have excellent knowledge!';
    } else if (percentage >= 60) {
        message = '👍 Good work! Keep learning!';
    } else if (percentage >= 50) {
        message = '📚 Not bad! Review the material and try again.';
    } else {
        message = '💪 Keep studying! You can do better!';
    }
    
    document.getElementById('result-message').textContent = message;
    
    // Display user name with conditional greeting
    let greeting = '';
    if (percentage >= 60) {
        greeting = `Congratulations, ${userName}!`;
    } else {
        greeting = `${userName}, keep studying!`;
    }
    document.getElementById('user-name-display').textContent = greeting;
    
    // Generate category scores
    generateCategoryScores();
    
    // Generate detailed report
    generateDetailedReport();
}

// Generate category scores visualization
function generateCategoryScores() {
    const categoryScoresContainer = document.getElementById('category-scores-container');
    let html = '';
    
    // Calculate scores for each category
    const categoryResults = {};
    
    Object.keys(questionCategories).forEach(categoryName => {
        const questionIds = questionCategories[categoryName];
        let correct = 0;
        let total = questionIds.length;
        
        questionIds.forEach(questionId => {
            const questionIndex = quizData.questions.findIndex(q => q.id === questionId);
            if (questionIndex !== -1 && userAnswers[questionIndex] === quizData.questions[questionIndex].correctAnswer) {
                correct++;
            }
        });
        
        const percentage = Math.round((correct / total) * 100);
        categoryResults[categoryName] = {
            correct: correct,
            total: total,
            percentage: percentage
        };
    });
    
    // Generate HTML for each category
    Object.keys(categoryResults).forEach(categoryName => {
        const result = categoryResults[categoryName];
        let barClass = 'poor';
        
        if (result.percentage >= 80) {
            barClass = 'excellent';
        } else if (result.percentage >= 65) {
            barClass = 'good';
        } else if (result.percentage >= 50) {
            barClass = 'average';
        }
        
        html += `
            <div class="category-item">
                <div class="category-header">
                    <span class="category-name">${categoryName}</span>
                    <span class="category-score">${result.correct}/${result.total}</span>
                </div>
                <div class="category-bar-container">
                    <div class="category-bar-fill ${barClass}" style="width: ${result.percentage}%">
                        ${result.percentage}%
                    </div>
                </div>
            </div>
        `;
    });
    
    categoryScoresContainer.innerHTML = html;
}

// Generate detailed report for all questions
function generateDetailedReport() {
    const reportContent = document.getElementById('report-content');
    let html = '';
    
    quizData.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        const statusClass = isCorrect ? 'correct' : 'incorrect';
        const formattedQuestion = formatQuestionWithCode(question.question);
        
        html += `
            <div class="report-question ${statusClass}">
                <div class="report-question-number">Question ${index + 1} of ${quizData.questions.length} ${isCorrect ? '✓' : '✗'}</div>
                <div class="report-question-text">${formattedQuestion}</div>
                
                <div class="report-answer user-answer ${isCorrect ? '' : 'wrong'}">
                    <strong>Your Answer:</strong> ${question.options[userAnswer]}
                </div>
                
                ${!isCorrect ? `
                    <div class="report-answer correct-answer">
                        <strong>Correct Answer:</strong> ${question.options[question.correctAnswer]}
                    </div>
                ` : ''}
                
                <div class="report-explanation">
                    <strong>💡 Explanation:</strong><br>
                    ${question.explanation}
                </div>
            </div>
        `;
    });
    
    reportContent.innerHTML = html;
}

// Restart the quiz
function restartQuiz() {
    document.getElementById('result-container').classList.remove('show');
    document.getElementById('start-container').style.display = 'block';
    document.getElementById('user-name').value = userName; // Keep the name pre-filled
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('toggle-results-btn').textContent = '📊 View Detailed Results';
    currentQuestion = 0;
    userAnswers = [];
    score = 0;
}

// Toggle results visibility
function toggleResults() {
    const resultsSection = document.getElementById('results-section');
    const toggleBtn = document.getElementById('toggle-results-btn');
    
    if (resultsSection.style.display === 'none') {
        resultsSection.style.display = 'block';
        toggleBtn.textContent = '📊 Hide Detailed Results';
    } else {
        resultsSection.style.display = 'none';
        toggleBtn.textContent = '📊 View Detailed Results';
    }
}

// Download certificate
function downloadCertificate() {
    // Redirect to certificate page with user name as parameter
    const encodedName = encodeURIComponent(userName);
    const encodedScore = encodeURIComponent(score);
    const encodedTotal = encodeURIComponent(quizData.questions.length);
    window.open(`certificate.html?name=${encodedName}&score=${encodedScore}&total=${encodedTotal}`, '_blank');
}

// Initialize quiz on page load
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quiz-title').textContent = quizData.title;
    document.getElementById('quiz-description').textContent = quizData.description;
});
