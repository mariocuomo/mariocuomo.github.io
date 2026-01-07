// Questions data embedded directly to avoid CORS issues
const quizData = {
    "title": "Bootcamp: Security Copilot Fundamentals and experiences",
    "description": "Test your knowledge about Security Copilot fundamentals, experiences, agents, use cases, and core capabilities",
    "questions": [
        {
            "id": 27,
            "question": "What are the file upload size limits in Security Copilot?",
            "options": [
                "Each file up to 3 MB with a total combined limit of 20 MB",
                "Each file up to 25 MB with no limit on total combined size",
                "Each file up to 10 MB with a total combined limit of 50 MB",
                "Each file up to 5 MB with a total combined limit of 100 MB"
            ],
            "correctAnswer": 0,
            "explanation": "Security Copilot allows you to upload files up to 3 MB each, with a total combined limit of 20 MB across all uploaded files. This ensures optimal performance while accommodating common security analysis scenarios including document analysis, script review, and log examination.",
            "hint": "There are two limits: one per individual file and one for all files combined."
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
            "question": "Which RBAC role is required to create and publish promptbooks at the tenant level?",
            "options": [
                "Security Copilot Contributor role with workspace-level permissions",
                "Security Copilot Owner role with tenant-wide administrative access",
                "Security Reader role with elevated promptbook publishing rights",
                "Global Administrator role regardless of Security Copilot assignments"
            ],
            "correctAnswer": 1,
            "explanation": "The Security Copilot Owner role is required to create and publish promptbooks at the tenant level. This role has tenant-wide administrative permissions including managing plugins, promptbooks, workspace settings, and other administrative functions. Contributors can create promptbooks within their workspace scope only.",
            "hint": "Publishing at tenant level requires the highest Security Copilot role."
        },
        {
            "id": 4,
            "question": "Which products have Security Copilot embedded experiences?",
            "options": [
                "Microsoft Defender XDR, Sentinel, Intune, Entra, and Purview portals",
                "Microsoft Defender for IoT, Azure Firewall, and EASM only",
                "Only Microsoft Sentinel and Defender XDR with no other integrations",
                "Azure Firewall, EASM, Defender for IoT, and Azure Monitor exclusively"
            ],
            "correctAnswer": 0,
            "explanation": "Security Copilot has embedded experiences in Microsoft Defender XDR, Microsoft Sentinel, Microsoft Intune, Microsoft Entra (formerly Azure AD), and Microsoft Purview portals. While Azure Firewall, EASM, and Defender for IoT are Microsoft security products, they do not currently have Security Copilot embedded experiences. The embedded experiences allow analysts to access AI-powered assistance directly within these security product interfaces.",
            "hint": "Focus on the core security products where SOC analysts spend most of their time."
        },
        {
            "id": 5,
            "question": "When using GDAP for partner access, whose SCU capacity plan is consumed?",
            "options": [
                "The customer tenant's capacity plan is used for all operations",
                "The partner (MSSP) tenant's capacity plan is consumed exclusively",
                "SCU consumption is split 50/50 between customer and partner tenants",
                "A separate shared capacity pool is created and billed to both parties"
            ],
            "correctAnswer": 0,
            "explanation": "When using Granular Delegated Admin Privileges (GDAP) for partner access, the customer tenant's Security Copilot capacity plan (SCUs) is consumed. With Azure Lighthouse, the partner tenant's capacity plan is used. With B2B collaboration (guest accounts), the customer tenant's capacity plan is used. GDAP is the recommended approach for MSSP access management.",
            "hint": "Consider who owns the tenant where the work is being performed."
        },
        {
            "id": 6,
            "question": "When sharing a Security Copilot session, what permissions does the recipient receive?",
            "options": [
                "Full edit access including ability to delete prompts and modify responses",
                "Read-only access to view prompts and responses without modification capability",
                "Ability to continue the investigation by adding new prompts to the thread",
                "Contributor-level access restricted to appending comments only"
            ],
            "correctAnswer": 1,
            "explanation": "When you share a session link in Security Copilot, recipients receive read-only access to view the prompts, responses, and investigation context. They cannot modify, delete, or add to the shared session. To collaborate actively, users must work within the same workspace and create their own sessions.",
            "hint": "Consider what level of access is most appropriate for session links."
        },
        {
            "id": 7,
            "question": "What are 'skills' in Security Copilot?",
            "options": [
                "API endpoints exposed by plugins for external system integration",
                "Predefined KQL queries stored in the Security Copilot query library",
                "Workflow automation templates for orchestrating security responses",
                "Capabilities allowing Security Copilot to perform actions or retrieve data"
            ],
            "correctAnswer": 3,
            "explanation": "Skills are specific capabilities that allow Security Copilot to perform actions, query data sources, or interact with security tools. Built-in skills come from Microsoft plugins (like Defender, Sentinel), while custom skills can be created by organizations to extend functionality.",
            "hint": "Think about the functional capabilities that plugins provide to the platform."
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
            "question": "What is the nature of Security Copilot Owner and Contributor roles?",
            "options": [
                "They are Microsoft Entra ID roles with comprehensive tenant permissions",
                "They function like access groups controlling only Security Copilot capabilities",
                "They are Azure RBAC roles providing access to all Azure security resources",
                "They are Microsoft 365 admin roles with global security data access"
            ],
            "correctAnswer": 1,
            "explanation": "Security Copilot introduces two roles (Owner and Contributor) that function like access groups but are NOT Microsoft Entra ID roles. They only control access to Security Copilot platform capabilities and provide no access by themselves to security data. Users need appropriate data source permissions separately.",
            "hint": "Consider the scope of what these roles control and where they are defined."
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
            "question": "Which file formats are officially supported for upload in Security Copilot?",
            "options": [
                "Common text file types: DOCX, MD, PDF, and TXT formats",
                "All Microsoft Office formats including XLSX, PPTX, and DOCX files",
                "Script files only: PowerShell, Python, Bash, and JavaScript formats",
                "Any file format as long as it's under the 3 MB size limit"
            ],
            "correctAnswer": 0,
            "explanation": "Security Copilot officially supports common text file types for upload: DOCX (Word documents), MD (Markdown), PDF (Portable Document Format), and TXT (plain text) files. Each file must not exceed 3 MB, and the total combined upload limit is 20 MB.",
            "hint": "Focus on common document and text formats, not all possible file types."
        },
        {
            "id": 12,
            "question": "Which tools provide audit logging capabilities for Security Copilot?",
            "options": [
                "Only Azure Monitor Logs with custom workbook configurations for queries",
                "Microsoft Purview UAL, Purview DSPM for AI, and Office Management API",
                "Security Copilot has no auditing capabilities for compliance requirements",
                "Only Microsoft Sentinel with dedicated Security Copilot data connector"
            ],
            "correctAnswer": 1,
            "explanation": "Security Copilot provides audit logging through Microsoft Purview Unified Audit Log (UAL) for admin events and activity metadata, Microsoft Purview Data Security Posture Management (DSPM) for AI for prompt/response pairs, and the Office Management API for programmatic access to audit data. These tools help organizations meet compliance and regulatory requirements.",
            "hint": "Think about Microsoft Purview capabilities and Office APIs for auditing."
        },
        {
            "id": 13,
            "question": "What is the relationship between Security Copilot Contributor and Owner roles?",
            "options": [
                "Contributors have all Owner permissions plus additional billing management capabilities",
                "Owners can manage plugins and settings; Contributors can use skills but not configure",
                "Both roles have identical permissions with different naming for organizational clarity",
                "Contributors manage day-to-day operations; Owners only handle licensing and billing"
            ],
            "correctAnswer": 1,
            "explanation": "The Security Copilot Owner role has administrative capabilities including managing plugins, configuring workspace settings, publishing tenant-level promptbooks, and controlling access. Contributors can use Security Copilot, run prompts, access skills, and create workspace-scoped promptbooks, but cannot modify tenant-level settings or plugin configurations.",
            "hint": "Think about administrative privileges versus operational usage."
        },
        {
            "id": 14,
            "question": "What type of audit information does Purview DSPM for AI provide for Security Copilot?",
            "options": [
                "Only administrative configuration changes and tenant-level settings modifications",
                "Prompt and response pairs with the content of user interactions",
                "Only metadata about when users logged in and session duration information",
                "Network traffic patterns and bandwidth consumption metrics for analytics"
            ],
            "correctAnswer": 1,
            "explanation": "Microsoft Purview Data Security Posture Management (DSPM) for AI provides insights into prompt/response pairs in Security Copilot. This includes the actual content of prompts sent to skills and their responses, which is critical for audit purposes. The Unified Audit Log (UAL) handles admin events and activity metadata, while DSPM for AI focuses on the prompt/response content inspection.",
            "hint": "DSPM for AI focuses on the actual content of interactions, not just metadata."
        },
        {
            "id": 15,
            "question": "What is a workspace in Security Copilot?",
            "options": [
                "A scoped, tenant-bound environment where users, automations, and agents operate",
                "An Azure Resource Group containing Security Copilot service components",
                "A Log Analytics workspace for storing Security Copilot audit data",
                "A Microsoft Sentinel workspace integrated with Security Copilot plugins"
            ],
            "correctAnswer": 0,
            "explanation": "A workspace is a scoped, tenant-bound environment where users, automations, and agents operate. All user interactions - whether manual actions, automated workflows, or agent-triggered responses - occur within the context of a specific workspace. It provides a boundary for user access and resource allocation, enabling proper governance and collaboration.",
            "hint": "It's a logical container specific to Security Copilot, not shared with other services."
        },
        {
            "id": 16,
            "question": "How many SCUs per month does an organization with 2,500 Microsoft 365 E5 licenses receive?",
            "options": [
                "1,000 SCUs per month included at no additional cost",
                "2,500 SCUs per month scaling linearly with license count",
                "400 SCUs per month as the standard allocation for all organizations",
                "10,000 SCUs per month which is the maximum capacity allowed"
            ],
            "correctAnswer": 0,
            "explanation": "Organizations with Microsoft 365 E5 receive 400 SCUs per month for every 1,000 paid user licenses, up to a maximum of 10,000 SCUs per month. For 2,500 licenses: (2,500 / 1,000) × 400 = 1,000 SCUs per month. This capacity scales proportionally with license count and is included at no additional cost.",
            "hint": "SCU allocation scales proportionally with license count up to a maximum threshold."
        },
        {
            "id": 17,
            "question": "When did the Security Copilot inclusion in Microsoft 365 E5 rollout begin?",
            "options": [
                "November 18, 2025, for existing Security Copilot customers with M365 E5",
                "January 1, 2026, for all Microsoft 365 E5 customers simultaneously",
                "October 1, 2025, with immediate activation for all eligible customers",
                "December 1, 2025, starting with new customers before existing ones"
            ],
            "correctAnswer": 0,
            "explanation": "The rollout began on November 18, 2025, for existing Security Copilot customers with Microsoft 365 E5 licenses, and will continue in the upcoming months for all M365 E5 customers. Organizations receive a 30-day advanced notification before activation. Existing Security Copilot customers with M365 E5 can access this benefit at no additional cost.",
            "hint": "The rollout started in mid-November 2025 for existing customers first."
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
                "Only for scripts under 100KB and written in Microsoft-supported languages"
            ],
            "correctAnswer": 0,
            "explanation": "Security Copilot can analyze various types of scripts including PowerShell, Python, Bash, and others. It can explain what the script does, identify potentially malicious behaviors, decode obfuscation, and help analysts understand attacker tools and techniques quickly.",
            "hint": "Consider the breadth of file types and scenarios Security Copilot supports."
        },
        {
            "id": 20,
            "question": "What is an 'agent' in the context of Security Copilot?",
            "options": [
                "A Logic Apps connector that enables workflow automation for security tasks",
                "A specialized plugin providing access to specific security data sources",
                "A pre-configured promptbook template for common investigation scenarios",
                "An autonomous AI entity orchestrating skills to complete complex tasks"
            ],
            "correctAnswer": 3,
            "explanation": "An agent in Security Copilot is an autonomous AI entity that can independently orchestrate and execute multiple skills and actions to accomplish complex security tasks. Agents can break down complex requests, decide which skills to use, and work through multi-step processes with minimal human intervention.",
            "hint": "Think about what differentiates automated decision-making from static workflows."
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
            "question": "You submit the prompt 'Who Am I' in Security Copilot and receive the response shown below. What should you do first?<br><br><img src='img/whoAmI.png' alt='Who Am I Response' style='max-width: 100%; border: 2px solid #e0e0e0; border-radius: 8px; margin: 10px 0;'>",
            "options": [
                "Check if the Microsoft Entra plugin is enabled in your workspace",
                "Contact your tenant administrator to report a system malfunction",
                "Resubmit the prompt multiple times to verify consistency of results",
                "Create a new session because there might be a bug or cache issue"
            ],
            "correctAnswer": 0,
            "explanation": "The 'Who Am I' prompt is designed to trigger the Microsoft Entra plugin to retrieve your user identity information. If you receive an unexpected or incomplete response, the first troubleshooting step is to verify that the Microsoft Entra plugin is enabled in your Security Copilot workspace. Plugins must be enabled to access their skills and data sources.",
            "hint": "This prompt relies on a specific plugin to retrieve identity information."
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
            "hint": "Consider Security Copilot's natural language processing capabilities."
        },
        {
            "id": 26,
            "question": "What is the Defender experience in Security Copilot?",
            "options": [
                "A standalone API service for programmatic access to Defender data",
                "An optional add-on requiring additional licensing and configuration",
                "Security Copilot capabilities embedded within Microsoft Defender XDR",
                "A dedicated workspace template pre-configured with Defender plugins"
            ],
            "correctAnswer": 2,
            "explanation": "The Defender experience refers to Security Copilot capabilities embedded directly within the Microsoft Defender XDR portal. This includes incident summarization, guided responses, device and user analysis, and threat intelligence enrichment - all accessible without leaving the Defender interface.",
            "hint": "Think about where Defender users spend most of their time."
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
            "question": "How long are Security Copilot sessions retained before automatic deletion?",
            "options": [
                "Sessions are retained for 90 days from creation date",
                "Sessions persist indefinitely unless manually deleted by users",
                "Sessions are kept for 30 days after the last prompt interaction",
                "Session retention is 180 days with archival options available"
            ],
            "correctAnswer": 1,
            "explanation": "Security Copilot sessions persist indefinitely and are saved persistently unless manually deleted by users. This allows organizations to maintain long-term investigation records and reference past analyses without worrying about automatic deletion.",
            "hint": "Sessions are stored persistently for long-term reference."
        },
        {
            "id": 29,
            "question": "What is the purpose of file upload capability in Security Copilot?",
            "options": [
                "To share files with other workspace members for collaborative investigations",
                "To analyze file content, scripts, logs, or documents for security insights and populate the knowledge base",
                "To permanently store evidence files for compliance and audit retention",
                "To backup organizational documentation for disaster recovery purposes"
            ],
            "correctAnswer": 1,
            "explanation": "The file upload capability allows security analysts to upload files (scripts, log files, malware samples, configuration files, documents) for Security Copilot to analyze. It can extract IoCs, explain code behavior, identify malicious patterns, summarize logs, and provide security context. Additionally, uploaded content can populate the knowledge base with organizational security documentation.",
            "hint": "Focus on the analytical capabilities and knowledge base population."
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
            "question": "Which Microsoft Entra roles automatically receive Security Copilot Owner role?",
            "options": [
                "Security Reader and Security Operator with permanent assignments",
                "Global Administrator and Security Administrator",
                "Privileged Role Administrator and Application Administrator automatically",
                "Only Global Administrator receives automatic assignment without removal"
            ],
            "correctAnswer": 1,
            "explanation": "Global Administrator and Security Administrator roles automatically receive the Security Copilot Owner role assignment. This ensures that key tenant administrators always have full administrative access to Security Copilot capabilities, maintaining proper governance and control.",
            "hint": "Consider which roles need guaranteed access for governance and oversight."
        },
        {
            "id": 33,
            "question": "How does Security Copilot handle uploaded files in terms of retention?",
            "options": [
                "Files are immediately deleted after analysis completes for security reasons",
                "Files are stored persistently and remain available for reanalysis",
                "Files are automatically removed after 90 days matching session retention",
                "Files are only cached temporarily during active session processing"
            ],
            "correctAnswer": 1,
            "explanation": "Uploaded files in Security Copilot are stored persistently and remain available for future reference and reanalysis. This allows security teams to revisit uploaded content, share files across investigations, and maintain a repository of analyzed artifacts. Users have control over file management and can delete them when no longer needed.",
            "hint": "Files are stored for ongoing access and team collaboration."
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
                "Automates the creation of STIX/TAXII feeds for threat intelligence sharing",
                "Monitors dark web forums and marketplaces for emerging threat indicators",
                "Correlates threat intelligence with active incidents for impact assessment"
            ],
            "correctAnswer": 0,
            "explanation": "The Threat Intelligence Briefing Agent generates tailored threat briefings that synthesize the latest insights from Microsoft Threat Intelligence and hundreds of global sources, directly contextualized to an organization's unique environment. This helps security teams stay informed about relevant threats.",
            "hint": "Focus on aggregation and contextualization of intelligence data."
        },
        {
            "id": 36,
            "question": "Can users outside the Security Copilot workspace access shared session links?",
            "options": [
                "Yes, anyone with the link can view the session including external users",
                "Only users within the same tenant with appropriate licenses can access shared sessions",
                "External access requires explicit approval from Security Copilot Owner role",
                "Session links work across tenants for licensed Security Copilot users only"
            ],
            "correctAnswer": 1,
            "explanation": "Shared session links in Security Copilot are accessible only to users within the same Microsoft Entra tenant who have appropriate Security Copilot licenses and permissions. External users or those outside the tenant cannot access sessions even with the link. This ensures security and data sovereignty.",
            "hint": "Security and tenant boundaries apply to session sharing."
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

// Category mapping for questions
const questionCategories = {
    "Core Capabilities": [1, 2, 7, 8, 11, 19, 21, 22, 25, 29, 30, 39, 40],  // Skills, plugins, file upload, KQL, data analysis, threat hunting
    "Permissions & Access": [3, 5, 6, 9, 13, 15, 32, 36],  // RBAC, workspace, sessions, roles
    "Embedded Experiences & Agents": [4, 10, 23, 26, 27, 31, 34, 35, 38],  // Defender/Sentinel/Entra/Intune experiences, agents
    "Licensing & Compliance": [12, 14, 16, 17, 18, 24, 28, 33, 37]  // SCU, E5, audit, retention, automation
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
