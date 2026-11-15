
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // PopUp for Languages and Competences
    $('.popup').magnificPopup({
      items: {
          src: '#popup-content',
          type: 'inline'
      },
      callbacks: {
        beforeOpen: function() {
          // `this` fait référence à l'objet Magnific Popup
          // `this.st.el` fait référence à l'élément cliqué (jQuery object)
          var clickedElement = this.st.el[0];
          $("#dynamic-content").html(modalContent[clickedElement.id]);
      },
      }
    });


    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);




const modalContentFr = {
    python: `
    <h2>Python</h2>

    <p> Python est mon language de programmation préféré. Je l'utilise dans mes projets personnels et professionnels </p>
    <span><i> Maîtrise : </i></span>
    <pre>
    🟡🟡🟡🟡⚪
    </pre>
    `,
    javascript: `
    <h2>Javascript</h2>

    <p> La presence de Javascript est devenue indispensable dans le développement, c'est un language que je maîtrise bien. </p>
    <span><i> Maîtrise : </i></span>
    <pre>
    🟡🟡🟡🟡⚪
    </pre>
    `,
    java: `
    <h2>Java</h2>

    <p> Java est un language que j'ai appris au cours de mes études. Je le maîtrise correctement. </p>
    <span><i> Maîtrise : </i></span>
    <pre>
    🟡🟡🟡⚪⚪
    </pre>
    `,

    html: `
    <h2>HTML</h2>

    <p> Le HTML/CSS n'est plus souvent utilisé Raw, mais il est toujours intéressant de le maîtriser. </p>
    <span><i> Maîtrise : </i></span>
    <pre>
    🟡🟡🟡🟡⚪
    </pre>
    `,
    c: `
    <h2>C/C++</h2>

    <p> J'ai appris le C/C++ au cours de mes études, j'ai quelques notions. </p>
    <span><i> Maîtrise : </i></span>
    <pre>
    🟡🟡⚪⚪⚪
    </pre>
    `,
    php:
    `
    <h2>PHP</h2>

    <p> PHP est un language sur le quel j'ai travaillé pendant un moment. J'ai manipulé des CMS comme Prestashop. </p>

    <span><i> Maîtrise : </i></span>
    <pre>
    🟡🟡🟡⚪⚪
    </pre>
    `,
    windows:
    `
    <h2>Windows</h2>

    <p> J'ai une bonne maîtrise de l'environnement Windows. Que ce soit pour l'installation, la modification ou utilisation. </p>

    <span><i> Maîtrise : </i></span>
    <pre>
    🟡🟡🟡🟡⚪
    </pre>
    `,
    linux:
    `
    <h2>Linux</h2>

    <p> J'ai une bonne maîtrise de l'environnement Linux. Que ce soit pour l'installation, la modification ou utilisation. J'ai l'habitude de travailler avec des distributions comme Ubuntu, Mint, Kali. </p>

    <span><i> Maîtrise : </i></span>
    <pre>
    🟡🟡🟡🟡⚪
    </pre>
    `,
    server:
    `
    <h2>Serveurs</h2>

    <p> J'ai actuellement plusieurs serveurs, j'ai une bonne maîtrise de la manipulation, gestion et configuration des serveurs. Ainsi que la gestion DNS, etc... </p>

    <span><i> Maîtrise : </i></span>
    <pre>
    🟡🟡🟡⚪⚪
    </pre>
    `,
    emf:
    `
    <h2>EMF</h2>
    <span>(Eclipse Modeling Framework)</span>

    <p> Je travaille souvent avec EMF pour la modélisation et la génération de code. </p>

    <span><i> Maîtrise : </i></span>
    <pre>
    🟡🟡🟡⚪⚪
    </pre>
    `,
    react:
    `
    <h2>React</h2>

    <p> React est un framework que j'utilise souvent pour le développement de mes applications web. </p>

    <span><i> Maîtrise : </i></span>
    <pre>
    🟡🟡🟡⚪⚪
    </pre>
    `,
    clickMe:
    `
    <h2>Python</h2>

    <p> Python est mon language de programmation préféré. Je l'utilise dans mes projets personnels et professionnels </p>
    <span><i> Maîtrise : </i></span>
    <pre>
    🟡🟡🟡🟡⚪
    </pre>
    `

}

const skillLevel = function(level) {
    return '🟡'.repeat(level) + '⚪'.repeat(5 - level);
};

const modalEntryEn = function(title, text, level, subtitle) {
    return `
    <h2>${title}</h2>
    ${subtitle ? `<span>${subtitle}</span>` : ''}

    <p> ${text} </p>
    <span><i> Proficiency: </i></span>
    <pre>
    ${skillLevel(level)}
    </pre>
    `;
};

const modalContentEn = {
    python: modalEntryEn('Python', 'Python is my favourite programming language. I use it in my personal and professional projects.', 4),
    javascript: modalEntryEn('JavaScript', 'JavaScript has become essential in development, and it is a language I know well.', 4),
    java: modalEntryEn('Java', 'I learned Java during my studies and have a solid command of it.', 3),
    html: modalEntryEn('HTML', 'HTML/CSS is rarely written by hand anymore, but it is still worth mastering.', 4),
    c: modalEntryEn('C/C++', 'I learned C/C++ during my studies and have some working knowledge of it.', 2),
    php: modalEntryEn('PHP', 'I worked with PHP for a while, including CMSs such as PrestaShop.', 3),
    windows: modalEntryEn('Windows', 'I am comfortable with the Windows environment, whether for installation, configuration or everyday use.', 4),
    linux: modalEntryEn('Linux', 'I am comfortable with the Linux environment, whether for installation, configuration or everyday use. I am used to distributions such as Ubuntu, Mint and Kali.', 4),
    server: modalEntryEn('Servers', 'I run several servers and am comfortable handling, managing and configuring them, as well as DNS management.', 3),
    emf: modalEntryEn('EMF', 'I often work with EMF for modeling and code generation.', 3, '(Eclipse Modeling Framework)'),
    react: modalEntryEn('React', 'React is a framework I often use to develop my web applications.', 3)
};

const modalContent = document.documentElement.lang === 'en' ? modalContentEn : modalContentFr;
