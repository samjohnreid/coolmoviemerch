const appContainer = document.getElementById('app');
const path = appContainer.dataset.path;
const aux = appContainer.dataset.aux;

const auxPages = () => {
  if (aux === 'true') {
  
    const auxContainer = document.querySelector('.aux');
  
    let auxContent;
  
    // TODO: add fight club leather jacket(s) to grid!
    const auxContentAbout = `
      <p>Cool Movie Merch exists as a resource to find cool memorabilia, gadgets, toys, games, posters, accessories, apparel, office equipment, cosplay gear, face masks and any kind of merchandise related to movies... mining the web for movie gold!</p>
      <p>Most of the items you see on here will generate commission as affiliate links (the price won't be increased at all for you, it just means Cool Movie Merch gets a small cut from the seller for sending the referral).</p>
      <p>However! This site exists primarily as a resource for ride or die movie buffs, and Cool Movie Merch is of the same ilk as you; so you will still see links to cool merch even if they don't generate any affiliate revenue&mdash;for example, these fine <a href="https://www.soulrevolver.com/mens-leather-jackets/mens-replica-leather-jackets/fight-club">Fight Club leather jackets</a>!</p>
      <p>That's about it, really. If you need to know more red tape stuff, then please visit the <a href="/privacy/">privacy</a>, <a href="/terms/">terms</a> or <a href="/contact/">contact</a> pages; otherwise, <a href="/">get browsing</a>!</p>
    `;
  
    // TODO: update this policy when i start using localStorage for favorite items, and/or if i store search terms
    const auxContentPrivacy = `
      <p>Cool Movie Merch does not use cookies or store or track any data about you of any kind whatsoever (well, unless you sign up for the newsletter&mdash;in which case a record of your email address will be kept).</p>
      <p>If you sign up for the Cool Movie Merch newsletter, a record of your email address will be stored for use purely to send out occasional emails regarding new merch listed on this site&mdash;and that email address will never be shared with anybody.</p>
    `;
  
    // TODO: set up a forward on this email address! (to samueljclarke@gmail.com...?)
    // TODO: captcha...?
    const auxContentContact = `
      <p>Please reach out if you have any questions regarding any of the content on this site: <a href="mailto:info@coolmoviemerch.com">info@coolmoviemerch.com</a></p>
    `;
  
    const auxContentTerms = `
      <p>Cool Movie Merch is a participant in multiple affiliate advertising programs, including the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for affiliates to earn fees (at no additional cost to you!) by linking to Amazon.com and affiliated sites.</p>
      <p>By using this site, you agree that it is your responsibility to ensure any prices listed on this site are accurate on the partner site. Cool Movie Merch is not responsible for any discrepancies in price listed on this site against those at point-of-sale. (Basically, please be sure to keep your eye on the price when you're checking out!)</p>
    `;
  
    const auxContentNewsletter = () => {
      const newsletterEmail = new URLSearchParams(window.location.search).get('email');
      return `
        <p>You joined the Cool Movie Merch newsletter with the following email: <strong>${newsletterEmail}</strong></p>
      `;
    };
  
    // TODO: turn this into switch (like in getTitle?)
    if (path === 'about') {
      auxContent = auxContentAbout;
    } else if (path === 'privacy') {
      auxContent = auxContentPrivacy;
    } else if (path === 'contact') {
      auxContent = auxContentContact;
    } else if (path === 'terms') {
      auxContent = auxContentTerms;
    } else if (path === 'newsletter') {
      auxContent = auxContentNewsletter();
    }
  
    auxContainer.innerHTML = auxContent;
  };
};

export default auxPages;