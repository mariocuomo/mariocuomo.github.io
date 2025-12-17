// Questions data embedded directly to avoid CORS issues
const quizData = {
    "title": "Bootcamp: Security Copilot Fundamentals and experiences",
    "description": "Test your knowledge about Security Copilot fundamentals, experiences, agents, use cases, and core capabilities",
    "questions": [
        {
            "id": 1,
            "question": "What is Microsoft Security Copilot?",
            "options": [
                "A standalone antivirus and endpoint protection solution for Windows devices",
                "A password management and credential storage system for enterprises",
                "An AI-powered platform that assists security professionals with threat analysis and investigation",
                "A network firewall and intrusion detection appliance for data centers"
            ],
            "correctAnswer": 2,
            "explanation": "Microsoft Security Copilot is an AI-powered security analysis platform that uses large language models combined with security-specific knowledge to assist security professionals in threat detection, investigation, and response. It's not just an antivirus, firewall, or password manager.",
            "hint": "Think about how AI can help security professionals in their daily work."
        },
        {
            "id": 2,
            "question": "Which data sources can Security Copilot access through built-in plugins?",
            "options": [
                "Only Microsoft Defender and related endpoint protection data sources",
                "Exclusively cloud-based security and compliance data from Azure services",
                "Microsoft Defender, Sentinel, Entra, Intune, Purview, and third-party integrations",
                "Only on-premises Active Directory and local security event log data"
            ],
            "correctAnswer": 2,
            "explanation": "Security Copilot can access diverse data sources through its plugin ecosystem, including Microsoft Defender XDR, Microsoft Sentinel, Microsoft Entra, Microsoft Intune, Microsoft Purview, and can be extended to third-party sources through custom plugins. This comprehensive data access enables holistic security analysis.",
            "hint": "Security Copilot integrates with multiple Microsoft security products and can be extended beyond."
        },
        {
            "id": 3,
            "question": "What is a 'promptbook' in Security Copilot?",
            "options": [
                "A comprehensive user training manual for new Security Copilot administrators",
                "A programming interface for developing custom security automation scripts",
                "A technical documentation guide covering API endpoints and integration methods",
                "A pre-built collection of prompts designed for specific security workflows"
            ],
            "correctAnswer": 3,
            "explanation": "A promptbook is a pre-built, curated collection of prompts organized to guide users through specific security investigation workflows or tasks. It acts as a guided automation tool for common security scenarios, not a training manual or documentation.",
            "hint": "Think of it as a playbook but for AI prompts - structured steps for a specific task."
        },
        {
            "id": 4,
            "question": "Which of the following is an embedded experience for Security Copilot?",
            "options": [
                "Microsoft Defender XDR portal for unified security operations and threat management",
                "Microsoft Excel for data analysis and spreadsheet-based security reporting",
                "Microsoft Teams for collaboration and general business communication purposes",
                "Microsoft Outlook for email security scanning and phishing attack detection"
            ],
            "correctAnswer": 0,
            "explanation": "Security Copilot is embedded directly within the Microsoft Defender XDR portal (and other security products like Microsoft Sentinel, Intune, and Purview). This allows security analysts to access AI-powered assistance without leaving their primary security tools.",
            "hint": "Embedded experiences are in security products where analysts already work."
        },
        {
            "id": 5,
            "question": "What is the standalone experience of Security Copilot?",
            "options": [
                "A lightweight browser extension for quick security queries and threat lookups",
                "A mobile application optimized for iOS and Android security management tasks",
                "A native desktop application requiring local installation on Windows workstations",
                "A dedicated web portal for comprehensive security analysis and investigations"
            ],
            "correctAnswer": 3,
            "explanation": "The standalone experience is a dedicated web portal (security.microsoft.com/copilot) where security professionals can perform comprehensive investigations, run prompts, and access all Security Copilot capabilities in a focused environment without being within a specific security product.",
            "hint": "It's a full, dedicated interface accessible through the web."
        },
        {
            "id": 6,
            "question": "What is a 'session' in Security Copilot?",
            "options": [
                "A conversation thread maintaining prompts, responses, and investigation context",
                "A scheduled meeting or calendar appointment for security review discussions",
                "A training course module covering specific Security Copilot functionality",
                "A time-limited login period before requiring re-authentication credentials"
            ],
            "correctAnswer": 0,
            "explanation": "A session in Security Copilot represents a conversation thread where all prompts, responses, and context are maintained. It allows you to build on previous queries and maintain context throughout an investigation. Sessions can be saved, shared, and revisited.",
            "hint": "It's like a chat conversation that keeps track of everything you've discussed."
        },
        {
            "id": 7,
            "question": "What are 'skills' in Security Copilot?",
            "options": [
                "Professional certifications required for Security Copilot administrators and users",
                "Structured training modules covering security operations and incident response",
                "Organizational security policies and compliance requirements for data handling",
                "Capabilities allowing Security Copilot to perform actions or retrieve data"
            ],
            "correctAnswer": 3,
            "explanation": "Skills are specific capabilities that allow Security Copilot to perform actions, query data sources, or interact with security tools. Built-in skills come from Microsoft plugins (like Defender, Sentinel), while custom skills can be created by organizations to extend functionality.",
            "hint": "Skills are like tools in a toolbox - each does a specific task."
        },
        {
            "id": 8,
            "question": "Which Microsoft security products have built-in plugins for Security Copilot?",
            "options": [
                "Only Microsoft Defender for comprehensive endpoint and network protection",
                "Defender, Sentinel, Intune, Entra, Purview, and additional security products",
                "Only Microsoft Sentinel for SIEM and security information management tasks",
                "Exclusively cloud-based services without support for on-premises solutions"
            ],
            "correctAnswer": 1,
            "explanation": "Security Copilot has built-in plugins for multiple Microsoft security products including Microsoft Defender XDR, Microsoft Sentinel, Microsoft Intune, Microsoft Entra (Azure AD), Microsoft Purview, and others. This enables comprehensive security analysis across the entire Microsoft ecosystem.",
            "hint": "Security Copilot integrates with many Microsoft security products, not just one or two."
        },
        {
            "id": 9,
            "question": "What is the primary use case for Security Copilot in incident response?",
            "options": [
                "Configuring network firewalls and implementing intrusion prevention rules",
                "Managing user passwords and enforcing credential rotation policies organization-wide",
                "Creating PowerPoint presentations and executive summary reports for management",
                "Accelerating investigation by summarizing incidents and suggesting response actions"
            ],
            "correctAnswer": 3,
            "explanation": "Security Copilot accelerates incident response by quickly summarizing complex incidents, correlating data from multiple sources, analyzing attack patterns, and suggesting appropriate response actions. This significantly reduces investigation time and improves response effectiveness.",
            "hint": "It helps analysts work faster and smarter during security incidents."
        },
        {
            "id": 10,
            "question": "What is the Conditional Access Optimization Agent in Microsoft Entra?",
            "options": [
                "A network optimization tool for improving VPN connection speeds and latency",
                "A password reset and account recovery assistant for end users and help desk",
                "An agent ensuring the right protections are applied to the right users",
                "A device management solution for enforcing mobile device compliance policies"
            ],
            "correctAnswer": 2,
            "explanation": "The Conditional Access Optimization Agent helps ensure the right protections are applied to the right users by analyzing conditional access policies, identifying gaps or overlaps, and providing intelligent recommendations to optimize identity protection. This agent is generally available.",
            "hint": "It helps optimize who gets access and under what conditions."
        },
        {
            "id": 11,
            "question": "What is a plugin in Security Copilot?",
            "options": [
                "A hardware device connecting to physical security systems and access controls",
                "A user role or permission set defining administrative access and capabilities",
                "A collection of skills connecting to specific data sources or services",
                "A type of malware signature or threat indicator used in detection engines"
            ],
            "correctAnswer": 2,
            "explanation": "A plugin is a package of skills that enables Security Copilot to connect to and interact with specific data sources, services, or security tools. Plugins can be built-in (Microsoft plugins) or custom (created by organizations). Each plugin provides skills tailored to its data source.",
            "hint": "Plugins are like apps that add specific capabilities to Security Copilot."
        },
        {
            "id": 12,
            "question": "Can organizations extend Security Copilot with custom capabilities?",
            "options": [
                "No, only Microsoft engineers can add new capabilities to the platform",
                "Yes, through custom plugins and skills developed for specific needs",
                "Only with explicit Microsoft approval and a paid consulting engagement",
                "Extensions require participation in a limited closed beta program only"
            ],
            "correctAnswer": 1,
            "explanation": "Organizations can extend Security Copilot by creating custom plugins and skills using various methods including API plugins (with OpenAPI specs), KQL skills (for querying data), Logic Apps, and other integration methods. This allows tailoring Security Copilot to specific organizational needs and data sources.",
            "hint": "Security Copilot is designed to be extensible by customers."
        },
        {
            "id": 13,
            "question": "What is prompt engineering in the context of Security Copilot?",
            "options": [
                "Crafting effective questions and instructions to get optimal AI responses",
                "Writing code and scripts for security automation and workflow orchestration",
                "Designing user interface layouts and visual elements for security dashboards",
                "Configuring network routing tables and firewall rules for traffic management"
            ],
            "correctAnswer": 0,
            "explanation": "Prompt engineering is the practice of crafting effective questions, instructions, and context to guide Security Copilot toward producing the most accurate and useful responses. Good prompts are specific, provide necessary context, and clearly state the desired outcome.",
            "hint": "It's about how you ask questions to get the best answers from the AI."
        },
        {
            "id": 14,
            "question": "Which of the following is a best practice for writing prompts in Security Copilot?",
            "options": [
                "Keep prompts as vague and general as possible to allow flexibility",
                "Use only highly technical jargon and specialized security terminology",
                "Provide specific details, context, and clear objectives in your prompts",
                "Make prompts extremely short, preferably single words for efficiency"
            ],
            "correctAnswer": 2,
            "explanation": "Effective prompts should provide specific details about what you're investigating, include relevant context (timeframes, entities, etc.), and clearly state what you want to achieve. Vague prompts lead to vague answers. Being specific helps the AI understand your intent and provide actionable insights.",
            "hint": "More context and specificity usually leads to better AI responses."
        },
        {
            "id": 15,
            "question": "What is a workspace in Security Copilot?",
            "options": [
                "A scoped, tenant-bound environment where users, automations, and agents operate",
                "A physical office location or room designated for security operations teams",
                "A file storage folder for organizing security reports and documentation",
                "A specific type of security alert requiring immediate attention and response"
            ],
            "correctAnswer": 0,
            "explanation": "A workspace is a scoped, tenant-bound environment where users, automations, and agents operate. All user interactions - whether manual actions, automated workflows, or agent-triggered responses - occur within the context of a specific workspace. It provides a boundary for user access and resource allocation, enabling proper governance and collaboration.",
            "hint": "It's a bounded environment that provides context for all Security Copilot operations."
        },
        {
            "id": 16,
            "question": "How is Security Copilot licensed and billed?",
            "options": [
                "Security Compute Units (SCUs) consumed based on actual usage patterns",
                "One-time perpetual license purchase with annual maintenance fee renewals",
                "Completely free for all Microsoft 365 and Azure enterprise customers",
                "Fixed monthly flat rate regardless of usage volume or complexity"
            ],
            "correctAnswer": 0,
            "explanation": "Security Copilot uses a consumption-based model with Security Compute Units (SCUs). Each interaction consumes SCUs based on complexity and resource usage. Organizations purchase SCU capacity and monitor consumption. This flexible model allows scaling based on actual usage patterns.",
            "hint": "It's based on how much you actually use, not a fixed per-user price."
        },
        {
            "id": 17,
            "question": "What is the minimum SCU commitment required to use Security Copilot?",
            "options": [
                "100 SCUs provisioned capacity required for enterprise production deployment",
                "3 SCUs provisioned capacity to ensure adequate performance and capability",
                "No minimum requirement, pay-as-you-go per individual prompt submitted",
                "1 SCU minimum for small organizations with limited security requirements"
            ],
            "correctAnswer": 1,
            "explanation": "Organizations must provision a minimum capacity of 3 Security Compute Units (SCUs) to use Security Copilot. This ensures adequate performance and capacity for meaningful security operations. Additional SCUs can be added based on organizational needs and usage patterns.",
            "hint": "There's a minimum capacity requirement to start using the service."
        },
        {
            "id": 18,
            "question": "What does SCU consumption depend on?",
            "options": [
                "Complexity of prompts, data processed, and skills invoked during operations",
                "Only the total number of licensed users in the organization",
                "Geographic location and time zone of the users submitting requests",
                "Time of day when queries are submitted to the platform"
            ],
            "correctAnswer": 0,
            "explanation": "SCU consumption is based on multiple factors including the complexity of prompts, volume of data processed, number and type of skills invoked, and computational resources required. Simple prompts consume fewer SCUs than complex multi-step investigations that process large datasets.",
            "hint": "More complex operations require more compute resources and thus consume more SCUs."
        },
        {
            "id": 19,
            "question": "Can Security Copilot help with script analysis?",
            "options": [
                "Yes, it analyzes and explains scripts including PowerShell, Python, and more",
                "Only for JavaScript code embedded in web applications and browser contexts",
                "No, it exclusively focuses on incident response and cannot analyze code",
                "Only with scripts written by Microsoft and officially approved developers"
            ],
            "correctAnswer": 0,
            "explanation": "Security Copilot can analyze various types of scripts including PowerShell, Python, Bash, and others. It can explain what the script does, identify potentially malicious behaviors, decode obfuscation, and help analysts understand attacker tools and techniques quickly.",
            "hint": "It can help understand any code or script that might be part of an attack."
        },
        {
            "id": 20,
            "question": "What is an 'agent' in the context of Security Copilot?",
            "options": [
                "A human security analyst performing manual threat hunting and investigation",
                "A network monitoring tool collecting logs and telemetry from infrastructure",
                "A data backup and recovery system ensuring business continuity protection",
                "An autonomous AI entity orchestrating skills to complete complex tasks"
            ],
            "correctAnswer": 3,
            "explanation": "An agent in Security Copilot is an autonomous AI entity that can independently orchestrate and execute multiple skills and actions to accomplish complex security tasks. Agents can break down complex requests, decide which skills to use, and work through multi-step processes with minimal human intervention.",
            "hint": "Agents are AI assistants that can work autonomously to solve complex problems."
        },
        {
            "id": 21,
            "question": "What is the primary benefit of using promptbooks?",
            "options": [
                "They automatically resolve all security incidents without human intervention",
                "They replace the need for experienced security analysts and SOC teams",
                "They provide guided, repeatable workflows for common security tasks",
                "They eliminate the requirement for any security policies or procedures"
            ],
            "correctAnswer": 2,
            "explanation": "Promptbooks provide standardized, repeatable workflows for common security investigation scenarios. They guide analysts through structured processes, ensure consistent investigation approaches, reduce the learning curve for new analysts, and capture organizational best practices for security operations.",
            "hint": "They help standardize how security tasks are performed across a team."
        },
        {
            "id": 22,
            "question": "Which type of data can Security Copilot analyze?",
            "options": [
                "Security alerts, logs, scripts, threat intelligence, emails, and diverse data",
                "Only structured log data from Microsoft security products and services",
                "Exclusively threat intelligence feeds from commercial vendor partnerships",
                "Only data stored within Microsoft 365 cloud services and applications"
            ],
            "correctAnswer": 0,
            "explanation": "Security Copilot can analyze diverse data types including security alerts from various sources, log data (structured and unstructured), scripts and code, threat intelligence indicators, email messages, configuration data, identity information, and more. Its multi-modal capabilities enable comprehensive security analysis.",
            "hint": "It's designed to work with many different types of security-related data."
        },
        {
            "id": 23,
            "question": "What does the Identity Risk Management Agent in Microsoft Entra do?",
            "options": [
                "Monitors network traffic patterns and identifies unusual bandwidth usage",
                "Investigates and remediates risky users with intelligent insights",
                "Resets user passwords automatically based on expiration policy schedules",
                "Scans endpoints for malware and potentially unwanted applications"
            ],
            "correctAnswer": 1,
            "explanation": "The Identity Risk Management Agent helps security teams investigate and remediate risky users by providing intelligent insights and actionable recommendations. It analyzes user behavior, risk signals, and context to help quickly identify and address identity-based threats.",
            "hint": "It focuses on finding and fixing risky user accounts."
        },
        {
            "id": 24,
            "question": "What is the role of Microsoft's security-specific AI model in Security Copilot?",
            "options": [
                "It handles all authentication and identity verification processes exclusively",
                "It provides security expertise, threat intelligence, and domain knowledge",
                "It serves no specific purpose and is redundant with general AI models",
                "It completely replaces GPT-4 for all security-related query processing"
            ],
            "correctAnswer": 1,
            "explanation": "Microsoft's security-specific AI model complements GPT-4 by providing deep security domain expertise, current threat intelligence, knowledge of attack techniques, understanding of security tools and data, and security-specific reasoning. This combination creates a powerful security-focused AI assistant.",
            "hint": "It adds specialized security knowledge to the general AI capabilities."
        },
        {
            "id": 25,
            "question": "Can Security Copilot generate KQL (Kusto Query Language) queries?",
            "options": [
                "No, users must manually write all queries using proper KQL syntax",
                "Yes, it generates and explains KQL queries from natural language",
                "Only for Microsoft Sentinel and not for any other data sources",
                "Only pre-built queries are available without customization options"
            ],
            "correctAnswer": 1,
            "explanation": "Security Copilot can generate KQL queries from natural language descriptions, explain existing queries, optimize query performance, and adapt queries to different data sources (Sentinel, Defender Advanced Hunting, Log Analytics). This helps analysts who may not be KQL experts to effectively query security data.",
            "hint": "It can translate what you want to find into the query language needed."
        },
        {
            "id": 26,
            "question": "What is the Defender experience in Security Copilot?",
            "options": [
                "A completely separate and independent product from Microsoft Defender",
                "An optional add-on requiring additional licensing and configuration",
                "Security Copilot capabilities embedded within Microsoft Defender XDR",
                "A comprehensive training course for security operations professionals"
            ],
            "correctAnswer": 2,
            "explanation": "The Defender experience refers to Security Copilot capabilities embedded directly within the Microsoft Defender XDR portal. This includes incident summarization, guided responses, device and user analysis, and threat intelligence enrichment - all accessible without leaving the Defender interface.",
            "hint": "It brings Security Copilot functionality into where Defender users already work."
        },
        {
            "id": 27,
            "question": "What is the Threat Hunting Agent in Microsoft Defender?",
            "options": [
                "A manual threat hunting tool requiring extensive KQL expertise",
                "An agent conducting end-to-end investigations using natural language",
                "A network packet analyzer for deep protocol inspection and analysis",
                "A centralized log collection and storage system for security events"
            ],
            "correctAnswer": 1,
            "explanation": "The Threat Hunting Agent transforms threat hunting by allowing analysts to conduct end-to-end investigations using natural language. It provides direct answers, guides users through investigative steps, and surfaces actionable insights, making proactive threat hunting more accessible and efficient.",
            "hint": "It makes threat hunting easier by understanding natural language questions."
        },
        {
            "id": 28,
            "question": "Which role is required to manage Security Copilot settings and plugins at the organization level?",
            "options": [
                "Security Copilot Owner role with administrative privileges and controls",
                "Any user can manage organizational settings and deploy plugins freely",
                "Global Reader role with read-only access to configuration settings",
                "Security Reader role for viewing but not modifying configurations"
            ],
            "correctAnswer": 0,
            "explanation": "The Security Copilot Owner role is required to manage organizational settings, deploy and manage plugins, configure workspaces, and perform administrative functions. This ensures proper governance and security controls over Security Copilot usage in the organization.",
            "hint": "Administrative tasks require a specific privileged role."
        },
        {
            "id": 29,
            "question": "What is the purpose of file upload capability in Security Copilot?",
            "options": [
                "To share files with other users for collaboration on documents",
                "To analyze file content, scripts, logs, or documents for security insights",
                "To store backup copies of important organizational files and data",
                "To create and maintain security documentation and procedure guides"
            ],
            "correctAnswer": 1,
            "explanation": "The file upload capability allows security analysts to upload files (scripts, log files, malware samples, configuration files, documents) for Security Copilot to analyze. It can extract IoCs, explain code behavior, identify malicious patterns, summarize logs, and provide security context.",
            "hint": "It helps analyze various file types for security purposes."
        },
        {
            "id": 30,
            "question": "How does Security Copilot assist with vulnerability management?",
            "options": [
                "It only scans systems for vulnerabilities without any prioritization",
                "It automatically patches all systems without requiring any human approval",
                "It prioritizes vulnerabilities, provides context, and suggests remediation",
                "It has no capabilities related to vulnerability assessment or management"
            ],
            "correctAnswer": 2,
            "explanation": "Security Copilot enhances vulnerability management by helping prioritize vulnerabilities based on threat intelligence and business context, explaining CVEs, suggesting remediation steps, assessing exposure and impact, and connecting vulnerabilities to active threats. It helps teams focus on what matters most.",
            "hint": "It helps make better decisions about which vulnerabilities to address first."
        },
        {
            "id": 31,
            "question": "What is the Change Review Agent in Microsoft Intune?",
            "options": [
                "An agent analyzing change requests for risks, conflicts and compliance",
                "A tool for tracking user login patterns and authentication activities",
                "A network monitoring solution for identifying configuration drift issues",
                "A backup and recovery system ensuring configuration version control"
            ],
            "correctAnswer": 0,
            "explanation": "The Change Review Agent analyzes change requests in context, checking for risks, conflicts and compliance issues. It provides detailed insights and clear recommendations, so IT admins can move forward with confidence knowing their decision is informed and considers potential impacts.",
            "hint": "It helps admins understand the impact of changes before implementing them."
        },
        {
            "id": 32,
            "question": "What does the Device Offboarding Agent in Microsoft Intune do?",
            "options": [
                "Installs software and applications on new devices during provisioning",
                "Backs up device data before hardware replacement or decommissioning",
                "Encrypts all device storage to protect sensitive information at rest",
                "Uses activity signals to suggest which devices should be removed"
            ],
            "correctAnswer": 3,
            "explanation": "The Device Offboarding Agent uses activity signals to identify inactive or unused devices and suggests which devices should be removed from the environment. It provides a simple way to offboard them, improving efficiency and strengthening the security of the digital estate by reducing the attack surface.",
            "hint": "It helps identify and remove devices that are no longer needed."
        },
        {
            "id": 33,
            "question": "Can Security Copilot help with report generation?",
            "options": [
                "Yes, it summarizes investigations and generates reports for stakeholders",
                "No, all reports must be manually created by security analysts",
                "Only for technical audiences without executive summary capabilities",
                "Only in one fixed format without customization or tailoring options"
            ],
            "correctAnswer": 0,
            "explanation": "Security Copilot can generate reports by summarizing investigations, highlighting key findings, explaining technical details in business terms, and creating executive summaries. It can tailor content for different audiences (technical teams, management, executives) and support incident documentation.",
            "hint": "It can help communicate security findings to different audiences."
        },
        {
            "id": 34,
            "question": "What is the Data Security Posture Agent in Microsoft Purview?",
            "options": [
                "A firewall configuration and network security policy management tool",
                "An agent helping admins proactively manage risk by discovering sensitive content",
                "A password management solution with credential rotation capabilities",
                "An email scanning engine for detecting phishing and spam messages"
            ],
            "correctAnswer": 1,
            "explanation": "The Data Security Posture Agent helps administrators proactively manage data security risk by discovering sensitive content across the organization, assessing security posture gaps, and improving policy hygiene. It provides insights to strengthen data protection before issues arise.",
            "hint": "It's about finding sensitive data and improving how it's protected."
        },
        {
            "id": 35,
            "question": "What does the Threat Intelligence Briefing Agent in Microsoft Defender do?",
            "options": [
                "Generates tailored threat briefings from Microsoft and global sources",
                "Sends spam emails to test user awareness and phishing susceptibility",
                "Blocks access to suspicious websites based on reputation scores",
                "Scans USB drives and removable media for malware signatures"
            ],
            "correctAnswer": 0,
            "explanation": "The Threat Intelligence Briefing Agent generates tailored threat briefings that synthesize the latest insights from Microsoft Threat Intelligence and hundreds of global sources, directly contextualized to an organization's unique environment. This helps security teams stay informed about relevant threats.",
            "hint": "It creates customized threat reports based on what matters to your organization."
        },
        {
            "id": 36,
            "question": "What is the benefit of Security Copilot's natural language interface?",
            "options": [
                "It's exclusively designed for non-technical users without security expertise",
                "It enables analysts of all skill levels to perform complex security tasks",
                "It significantly slows down security investigations and analysis processes",
                "It replaces all existing security tools and eliminates the need for them"
            ],
            "correctAnswer": 1,
            "explanation": "The natural language interface democratizes security operations by allowing analysts to ask questions and perform investigations using everyday language instead of requiring expertise in multiple query languages, tools, and APIs. This accelerates onboarding, improves efficiency, and enables more people to contribute to security operations.",
            "hint": "It makes security tools more accessible to more people."
        },
        {
            "id": 37,
            "question": "How does Security Copilot support security automation?",
            "options": [
                "It doesn't support automation and requires manual operation only",
                "Through API access, Logic Apps integration, and promptbook execution",
                "Only through manual processes without any programmatic interfaces",
                "By completely replacing all existing automation tools and workflows"
            ],
            "correctAnswer": 1,
            "explanation": "Security Copilot enables automation through multiple methods: Microsoft Graph API for programmatic access, Logic Apps integration for workflow automation, Power Automate connectors, promptbook execution for repeatable processes, and embedded experiences that can be triggered programmatically. This allows organizations to automate security operations at scale.",
            "hint": "It provides multiple ways to automate security workflows."
        },
        {
            "id": 38,
            "question": "What is the Dynamic Threat Detection Agent in Microsoft Defender?",
            "options": [
                "A static rule engine processing security events with fixed signatures",
                "An agent hunting for false negatives that traditional alerting might miss",
                "A centralized log aggregator collecting events from multiple sources",
                "A user training tool providing security awareness guidance materials"
            ],
            "correctAnswer": 1,
            "explanation": "The Dynamic Threat Detection Agent proactively hunts for false negatives and blind spots that traditional alerting might miss. It turns 'probably fine' into proven secure by finding and fixing false negatives, helping organizations stay safer by catching threats that would otherwise go undetected.",
            "hint": "It looks for threats that other security tools might have missed."
        },
        {
            "id": 39,
            "question": "Can Security Copilot correlate data across multiple security products?",
            "options": [
                "Yes, it correlates data across Defender, Sentinel, Entra, Intune, and more",
                "No, it works with one product at a time without cross-product analysis",
                "Only within Microsoft products and no third-party integrations possible",
                "Only manually without automated correlation or connection capabilities"
            ],
            "correctAnswer": 0,
            "explanation": "One of Security Copilot's key strengths is cross-product correlation. It can connect data from Microsoft Defender, Sentinel, Entra, Intune, Purview, and third-party sources (via custom plugins) to provide comprehensive security insights that span the entire environment, revealing connections that might be missed when analyzing products in isolation.",
            "hint": "It connects dots across your entire security stack."
        },
        {
            "id": 40,
            "question": "What type of threat hunting support does Security Copilot provide?",
            "options": [
                "None, it's exclusively designed for incident response activities only",
                "Only for known threats with existing signatures and detection rules",
                "Manual hunting tools requiring extensive security expertise and training",
                "Hypothesis generation, query creation, data analysis, and pattern identification"
            ],
            "correctAnswer": 3,
            "explanation": "Security Copilot enhances threat hunting by helping generate hunting hypotheses based on threat intelligence, creating queries to find suspicious patterns, analyzing large datasets for anomalies, identifying attack techniques, and suggesting hunting strategies. It accelerates proactive security operations.",
            "hint": "It helps security teams proactively search for hidden threats."
        }
    ]
};

let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let userName = '';

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
    const milestones = [10, 20, 30]; // Show at questions 10, 20, and 30
    
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
    
    // Generate detailed report
    generateDetailedReport();
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
