//div element for the about section
const aboutSection = document.createElement('div');
aboutSection.classList.add('about-section');

// heading element for the section title
const aboutTitle = document.createElement('h2');
aboutTitle.innerText = 'About Us';
aboutTitle.classList.add('about-title');

//  paragraph element for the section content
const aboutContent = document.createElement('p');
aboutContent.innerText = 'The BODABODA sector is one of the most important contributions to the Kenyan economy. On average, 8 
Kenyans rely on one ride for their daily activities, totaling 22 million daily rides in Kenya. With 2 million registered boda 
riders in Kenya, this business produces ksh.370 million each day. Despite this strong figure this business is less controlled by
the government, making it a renegade industry. At SONGA, we are attempting to dispel this misconception by providing secure, 
convenient, and economical trips that leave the consumer with the impression that THIS IS MADE FOR ME.';
aboutContent.classList.add('about-content');

aboutSection.appendChild(aboutTitle);
aboutSection.appendChild(aboutContent);

const learnMoreButton = document.createElement('button');
learnMoreButton.innerText = 'Learn More';
learnMoreButton.classList.add('learn-more-button');
const url = 'https://example.com';
learnMoreButton.addEventListener('click', () => {
  window.location.href = url;
});
aboutSection.appendChild(learnMoreButton);
document.body.appendChild(aboutSection);
