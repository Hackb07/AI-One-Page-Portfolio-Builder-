// Enhanced AI-powered content generation
const generateAIContent = async (formData) => {
    // Simulate API processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const { name, role, experience, specialization, education, achievements } = formData;
    const exp = parseInt(experience) || 3;
    
    // Generate professional summary
    const summary = generateSummary(role, exp, specialization, education);
    
    // Generate skills based on role and specialization
    const skills = generateSkills(role, specialization);
    
    // Generate achievements if not provided
    const achievementsList = achievements 
        ? achievements.split('\n').filter(a => a.trim())
        : generateAchievements(role, exp);
    
    return { summary, skills, achievements: achievementsList };
};

const generateSummary = (role, experience, specialization, education) => {
    const roleLower = role.toLowerCase();
    const spec = specialization ? ` specializing in ${specialization}` : '';
    const edu = education ? ` with a ${education}` : '';
    
    const templates = {
        developer: [
            `Results-driven ${role}${spec} with ${experience}+ years of experience building scalable, high-performance applications. Proven expertise in modern development practices, clean code architecture, and agile methodologies. Passionate about creating elegant solutions to complex problems and continuously expanding technical knowledge.`,
            `Innovative ${role}${spec}${edu}, bringing ${experience}+ years of hands-on experience in software development. Strong track record of delivering robust applications that exceed client expectations. Committed to writing maintainable code and staying current with emerging technologies and industry best practices.`,
            `Accomplished ${role} with ${experience}+ years of expertise${spec ? ' in ' + specialization : ''}. Demonstrated ability to architect and implement complex systems while maintaining code quality and performance standards. Collaborative team player with excellent problem-solving skills and a passion for technology.`
        ],
        designer: [
            `Creative ${role}${spec} with ${experience}+ years of experience crafting intuitive, user-centered digital experiences. Expert in translating complex requirements into elegant design solutions that balance aesthetics with functionality. Strong advocate for accessibility and inclusive design principles.`,
            `Talented ${role}${edu} with ${experience}+ years of professional experience. Specialized in creating visually compelling interfaces that enhance user engagement and drive business results. Proficient in design systems, prototyping, and user research methodologies.`,
            `Passionate ${role} bringing ${experience}+ years of design expertise${spec ? ' in ' + specialization : ''}. Known for attention to detail and ability to balance creative vision with business objectives. Experienced in collaborating with cross-functional teams to deliver exceptional user experiences.`
        ],
        data: [
            `Analytical ${role}${spec} with ${experience}+ years of experience transforming complex data into actionable insights. Expertise in statistical analysis, machine learning, and data visualization. Proven ability to drive data-informed decision-making and deliver measurable business impact.`,
            `Detail-oriented ${role}${edu} with ${experience}+ years of experience in data analysis and modeling. Strong background in extracting meaningful patterns from large datasets and communicating findings to stakeholders. Proficient in modern data tools and statistical methodologies.`,
            `Strategic ${role} with ${experience}+ years of expertise in leveraging data to solve business challenges${spec ? ', specializing in ' + specialization : ''}. Skilled in building predictive models, conducting A/B tests, and creating compelling data narratives that influence key decisions.`
        ],
        marketing: [
            `Strategic ${role}${spec} with ${experience}+ years of experience driving brand growth and customer engagement. Proven track record of developing and executing successful marketing campaigns across multiple channels. Data-driven approach with strong analytical and creative skills.`,
            `Dynamic ${role}${edu} bringing ${experience}+ years of marketing expertise. Specialized in creating compelling content strategies that resonate with target audiences and drive conversions. Experienced in SEO, social media, and digital marketing analytics.`,
            `Results-oriented ${role} with ${experience}+ years of experience${spec ? ' in ' + specialization : ''}. Expert in developing integrated marketing strategies that align with business objectives and deliver measurable ROI. Strong communicator with a passion for storytelling and brand building.`
        ],
        manager: [
            `Accomplished ${role}${spec} with ${experience}+ years of leadership experience. Proven ability to build and motivate high-performing teams while delivering projects on time and within budget. Strong strategic thinker with excellent communication and stakeholder management skills.`,
            `Experienced ${role}${edu} with ${experience}+ years of progressive leadership responsibility. Track record of driving operational excellence, fostering innovation, and developing talent. Skilled in change management and cross-functional collaboration.`,
            `Strategic ${role} bringing ${experience}+ years of management expertise${spec ? ' in ' + specialization : ''}. Known for building strong team cultures, implementing efficient processes, and achieving ambitious business goals. Committed to continuous improvement and employee development.`
        ]
    };
    
    let category = 'default';
    if (roleLower.includes('develop') || roleLower.includes('engineer') || roleLower.includes('program')) {
        category = 'developer';
    } else if (roleLower.includes('design')) {
        category = 'designer';
    } else if (roleLower.includes('data') || roleLower.includes('analyst') || roleLower.includes('scientist')) {
        category = 'data';
    } else if (roleLower.includes('market') || roleLower.includes('brand')) {
        category = 'marketing';
    } else if (roleLower.includes('manager') || roleLower.includes('director') || roleLower.includes('lead')) {
        category = 'manager';
    }
    
    if (templates[category]) {
        const options = templates[category];
        return options[Math.floor(Math.random() * options.length)];
    }
    
    return `Experienced ${role} with ${experience}+ years of professional expertise${spec}${edu}. Demonstrated ability to deliver high-quality results and drive meaningful impact. Strong problem-solver with excellent communication skills and a commitment to continuous learning and professional growth.`;
};

const generateSkills = (role, specialization) => {
    const roleLower = role.toLowerCase();
    const specLower = (specialization || '').toLowerCase();
    
    const skillSets = {
        frontend: ['JavaScript', 'React', 'Vue.js', 'TypeScript', 'HTML/CSS', 'Responsive Design', 'Webpack', 'REST APIs', 'Git', 'UI/UX Principles'],
        backend: ['Node.js', 'Python', 'Java', 'SQL', 'MongoDB', 'REST APIs', 'Microservices', 'Docker', 'AWS', 'Git'],
        fullstack: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'MongoDB', 'REST APIs', 'Docker', 'AWS', 'Git', 'Agile/Scrum'],
        mobile: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'iOS Development', 'Android Development', 'Mobile UI/UX', 'App Store Optimization', 'Git'],
        devops: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins', 'Terraform', 'Linux', 'Monitoring', 'Git', 'Python'],
        data: ['Python', 'SQL', 'R', 'Machine Learning', 'Data Visualization', 'Pandas', 'TensorFlow', 'Statistics', 'Tableau', 'Excel'],
        designer: ['Figma', 'Adobe XD', 'Sketch', 'UI/UX Design', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems', 'Accessibility', 'Adobe Creative Suite'],
        marketing: ['SEO', 'Content Strategy', 'Google Analytics', 'Social Media Marketing', 'Email Marketing', 'Copywriting', 'A/B Testing', 'Marketing Automation', 'CRM'],
        product: ['Product Strategy', 'User Research', 'Roadmap Planning', 'Agile/Scrum', 'Data Analysis', 'Stakeholder Management', 'A/B Testing', 'Wireframing', 'SQL'],
        manager: ['Team Leadership', 'Strategic Planning', 'Project Management', 'Agile/Scrum', 'Stakeholder Management', 'Budget Management', 'Performance Management', 'Communication']
    };
    
    // Determine skill category
    let skills = [];
    
    if (specLower.includes('frontend') || specLower.includes('front-end') || specLower.includes('ui')) {
        skills = skillSets.frontend;
    } else if (specLower.includes('backend') || specLower.includes('back-end') || specLower.includes('server')) {
        skills = skillSets.backend;
    } else if (specLower.includes('mobile') || specLower.includes('ios') || specLower.includes('android')) {
        skills = skillSets.mobile;
    } else if (specLower.includes('devops') || specLower.includes('cloud') || specLower.includes('infrastructure')) {
        skills = skillSets.devops;
    } else if (roleLower.includes('full') && roleLower.includes('stack')) {
        skills = skillSets.fullstack;
    } else if (roleLower.includes('frontend') || roleLower.includes('front-end')) {
        skills = skillSets.frontend;
    } else if (roleLower.includes('backend') || roleLower.includes('back-end')) {
        skills = skillSets.backend;
    } else if (roleLower.includes('mobile')) {
        skills = skillSets.mobile;
    } else if (roleLower.includes('devops') || roleLower.includes('cloud')) {
        skills = skillSets.devops;
    } else if (roleLower.includes('data') || roleLower.includes('scientist') || roleLower.includes('analyst')) {
        skills = skillSets.data;
    } else if (roleLower.includes('design')) {
        skills = skillSets.designer;
    } else if (roleLower.includes('market') || roleLower.includes('brand')) {
        skills = skillSets.marketing;
    } else if (roleLower.includes('product')) {
        skills = skillSets.product;
    } else if (roleLower.includes('manager') || roleLower.includes('director') || roleLower.includes('lead')) {
        skills = skillSets.manager;
    } else if (roleLower.includes('develop') || roleLower.includes('engineer')) {
        skills = skillSets.fullstack;
    } else {
        skills = ['Communication', 'Problem Solving', 'Team Collaboration', 'Project Management', 'Critical Thinking', 'Adaptability', 'Time Management', 'Leadership'];
    }
    
    return skills;
};

const generateAchievements = (role, experience) => {
    const roleLower = role.toLowerCase();
    
    const achievementTemplates = {
        developer: [
            'Architected and deployed scalable microservices handling 1M+ daily requests',
            'Reduced application load time by 60% through performance optimization',
            'Led development team of 5 engineers in successful product launch',
            'Implemented CI/CD pipeline reducing deployment time by 75%',
            'Mentored junior developers and conducted code reviews'
        ],
        designer: [
            'Redesigned flagship product resulting in 45% increase in user engagement',
            'Created comprehensive design system adopted across 10+ products',
            'Led user research initiatives with 200+ participants',
            'Improved accessibility compliance to WCAG 2.1 AA standards',
            'Collaborated with cross-functional teams on 15+ successful projects'
        ],
        data: [
            'Built predictive models improving forecast accuracy by 35%',
            'Analyzed datasets of 10M+ records to identify key business insights',
            'Created automated reporting dashboards saving 20 hours/week',
            'Led A/B testing program resulting in 25% conversion increase',
            'Presented data-driven recommendations to C-level executives'
        ],
        marketing: [
            'Increased organic traffic by 150% through SEO optimization',
            'Managed campaigns generating $2M+ in revenue',
            'Grew social media following by 300% in 12 months',
            'Improved email open rates by 40% through A/B testing',
            'Launched successful product campaigns across 5+ channels'
        ],
        manager: [
            'Led cross-functional team of 15+ members to deliver projects on time',
            'Improved team productivity by 30% through process optimization',
            'Successfully managed $5M+ annual budget',
            'Reduced employee turnover by 40% through culture initiatives',
            'Implemented agile methodologies across organization'
        ]
    };
    
    let category = 'developer';
    if (roleLower.includes('design')) category = 'designer';
    else if (roleLower.includes('data') || roleLower.includes('analyst')) category = 'data';
    else if (roleLower.includes('market')) category = 'marketing';
    else if (roleLower.includes('manager') || roleLower.includes('director') || roleLower.includes('lead')) category = 'manager';
    
    const templates = achievementTemplates[category] || achievementTemplates.developer;
    
    // Return 3-4 achievements based on experience
    const count = experience > 5 ? 4 : 3;
    return templates.slice(0, count);
};

// Generate portfolio HTML
const generatePortfolioHTML = (data) => {
    const { name, role, email, phone, location, website, linkedin, github, summary, skills, achievements, template, colorScheme } = data;
    
    const templateClass = template ? `template-${template}` : 'template-modern';
    const colorClass = colorScheme ? `color-${colorScheme}` : 'color-purple';
    
    const contactItems = [];
    if (email) contactItems.push(`<a href="mailto:${email}" class="contact-item">📧 ${email}</a>`);
    if (phone) contactItems.push(`<span class="contact-item">📱 ${phone}</span>`);
    if (location) contactItems.push(`<span class="contact-item">📍 ${location}</span>`);
    if (website) contactItems.push(`<a href="${website}" target="_blank" class="contact-item">🌐 Website</a>`);
    
    const socialLinks = [];
    if (linkedin) socialLinks.push(`<a href="${linkedin}" target="_blank" class="social-link">💼 LinkedIn</a>`);
    if (github) socialLinks.push(`<a href="${github}" target="_blank" class="social-link">💻 GitHub</a>`);
    
    return `
        <div class="portfolio-template ${templateClass} ${colorClass}">
            <div class="portfolio-header">
                <h1 class="portfolio-name">${name}</h1>
                <p class="portfolio-role">${role}</p>
                ${contactItems.length > 0 ? `<div class="portfolio-contact">${contactItems.join('')}</div>` : ''}
                ${socialLinks.length > 0 ? `<div class="social-links">${socialLinks.join('')}</div>` : ''}
            </div>
            
            <div class="portfolio-section">
                <h2>Professional Summary</h2>
                <p class="portfolio-summary">${summary}</p>
            </div>
            
            <div class="portfolio-section">
                <h2>Core Skills & Expertise</h2>
                <div class="skills-grid">
                    ${skills.map(skill => `<div class="skill-item">${skill}</div>`).join('')}
                </div>
            </div>
            
            ${achievements && achievements.length > 0 ? `
            <div class="portfolio-section">
                <h2>Key Achievements</h2>
                <ul class="achievements-list">
                    ${achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
        </div>
    `;
};

// Form submission handler
document.getElementById('portfolioForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        website: document.getElementById('website').value,
        experience: document.getElementById('experience').value,
        education: document.getElementById('education').value,
        linkedin: document.getElementById('linkedin').value,
        github: document.getElementById('github').value,
        specialization: document.getElementById('specialization').value,
        achievements: document.getElementById('achievements').value,
        template: document.getElementById('template').value,
        colorScheme: document.getElementById('colorScheme').value
    };
    
    // Show loading
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('previewFooter').classList.add('hidden');
    document.getElementById('editBtn').classList.add('hidden');
    document.getElementById('portfolioForm').style.display = 'none';
    
    try {
        // Generate AI content
        const aiContent = await generateAIContent(formData);
        
        const portfolioData = {
            ...formData,
            ...aiContent
        };
        
        // Generate and display preview
        const portfolioHTML = generatePortfolioHTML(portfolioData);
        document.getElementById('portfolioPreview').innerHTML = portfolioHTML;
        
        // Hide loading, show preview
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('previewFooter').classList.remove('hidden');
        document.getElementById('editBtn').classList.remove('hidden');
        
        // Store data for download
        window.currentPortfolio = portfolioData;
        
    } catch (error) {
        alert('Error generating portfolio. Please try again.');
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('portfolioForm').style.display = 'block';
    }
});

// Edit button handler
document.getElementById('editBtn').addEventListener('click', () => {
    document.getElementById('portfolioPreview').innerHTML = `
        <div class="preview-empty">
            <div class="preview-empty-icon">📄</div>
            <p>Your portfolio preview will appear here</p>
        </div>
    `;
    document.getElementById('previewFooter').classList.add('hidden');
    document.getElementById('editBtn').classList.add('hidden');
    document.getElementById('portfolioForm').style.display = 'block';
    
    // Scroll to form
    const builderSection = document.getElementById('builder');
    builderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Download HTML handler
document.getElementById('downloadBtn').addEventListener('click', () => {
    if (!window.currentPortfolio) return;
    
    const data = window.currentPortfolio;
    const fullHTML = generateFullHTML(data);
    
    // Create download
    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.name.replace(/\s+/g, '_')}_Portfolio.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Print/PDF handler
document.getElementById('downloadPdfBtn').addEventListener('click', () => {
    if (!window.currentPortfolio) return;
    
    const data = window.currentPortfolio;
    const fullHTML = generateFullHTML(data);
    
    // Open in new window for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(fullHTML);
    printWindow.document.close();
    
    // Wait for content to load then trigger print
    printWindow.onload = () => {
        setTimeout(() => {
            printWindow.print();
        }, 250);
    };
});

// Generate complete standalone HTML
const generateFullHTML = (data) => {
    const templateClass = data.template ? `template-${data.template}` : 'template-modern';
    const colorClass = data.colorScheme ? `color-${data.colorScheme}` : 'color-purple';
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - Professional Portfolio</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Georgia', serif; background: #f5f5f5; padding: 40px 20px; line-height: 1.6; }
        .portfolio-template { max-width: 900px; margin: 0 auto; background: white; padding: 60px; box-shadow: 0 0 30px rgba(0,0,0,0.1); }
        .portfolio-header { text-align: center; margin-bottom: 40px; border-bottom: 3px solid #333; padding-bottom: 30px; }
        .portfolio-name { font-size: 2.8em; color: #222; margin-bottom: 8px; font-weight: 700; }
        .portfolio-role { font-size: 1.4em; color: #667eea; font-weight: 400; margin-bottom: 20px; }
        .portfolio-contact { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 20px; font-size: 0.95em; }
        .contact-item { color: #555; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
        .social-links { display: flex; justify-content: center; gap: 15px; margin-top: 15px; }
        .social-link { display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; background: #f5f5f5; border-radius: 6px; text-decoration: none; color: #333; font-size: 0.9em; }
        .portfolio-section { margin: 35px 0; }
        .portfolio-section h2 { font-size: 1.6em; color: #333; margin-bottom: 15px; border-left: 4px solid #667eea; padding-left: 15px; font-weight: 600; }
        .portfolio-summary { line-height: 1.8; color: #444; font-size: 1.05em; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; margin-top: 15px; }
        .skill-item { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 16px; border-radius: 6px; text-align: center; font-weight: 500; font-size: 0.9em; }
        .achievements-list { list-style: none; padding: 0; }
        .achievements-list li { padding: 12px 0; padding-left: 30px; position: relative; color: #444; line-height: 1.6; }
        .achievements-list li:before { content: "✓"; position: absolute; left: 0; color: #667eea; font-weight: bold; font-size: 1.2em; }
        
        /* Template Variations */
        .template-professional .portfolio-header { border-bottom-color: #2c3e50; }
        .template-professional .portfolio-role { color: #2c3e50; }
        .template-professional .portfolio-section h2 { border-left-color: #2c3e50; }
        .template-professional .skill-item { background: #2c3e50; }
        
        .template-creative .portfolio-header { border-bottom: none; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 12px; }
        .template-creative .portfolio-name, .template-creative .portfolio-role { color: white; }
        .template-creative .contact-item { color: rgba(255,255,255,0.9); }
        .template-creative .portfolio-section h2 { border-left: none; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 20px; border-radius: 8px; }
        
        /* Color Schemes */
        .color-blue .portfolio-role, .color-blue .portfolio-section h2 { color: #2196F3; border-left-color: #2196F3; }
        .color-blue .skill-item { background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%); }
        .color-green .portfolio-role, .color-green .portfolio-section h2 { color: #4CAF50; border-left-color: #4CAF50; }
        .color-green .skill-item { background: linear-gradient(135deg, #4CAF50 0%, #388E3C 100%); }
        .color-orange .portfolio-role, .color-orange .portfolio-section h2 { color: #FF9800; border-left-color: #FF9800; }
        .color-orange .skill-item { background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%); }
        .color-dark { background: #1a1a1a; color: #e0e0e0; }
        .color-dark .portfolio-name, .color-dark .portfolio-section h2 { color: #fff; }
        .color-dark .portfolio-summary, .color-dark .achievements-list li { color: #ccc; }
        
        @media print { 
            body { padding: 0; background: white; } 
            .portfolio-template { box-shadow: none; padding: 40px; } 
        }
        @media (max-width: 768px) {
            .portfolio-template { padding: 30px 20px; }
            .portfolio-name { font-size: 2em; }
            .portfolio-role { font-size: 1.2em; }
            .portfolio-contact { flex-direction: column; align-items: center; }
            .skills-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); }
        }
    </style>
</head>
<body>
    ${generatePortfolioHTML(data)}
</body>
</html>`;
};
