const posts = [
  {
    id: 'quiet-interfaces',
    title: 'In praise of quiet interfaces',
    category: 'Design',
    date: 'Sep 2, 2026',
    readTime: '6 min',
    excerpt:
      'The best-designed tools disappear. A short argument for restraint, and why the loudest screen is rarely the most useful one.',
    content: [
      'The best-designed tools disappear. You stop noticing the interface and start noticing the work. This is harder to build than it sounds, because restraint doesn\u2019t demo well — nobody screenshots the absence of a badge.',
      'Every added element has to earn its place twice: once when it is designed, and again every time it competes for attention with everything already on the screen. Most interfaces fail the second test long before anyone notices the first.',
      'A quiet interface still has hierarchy. It just spends its loudness on one thing at a time, and trusts the person using it to find their way through the rest without being shouted at.',
      'None of this is an argument for minimalism as a style. A dense, busy tool can be quiet if the density is organized around how people actually think. A sparse one can be loud if every empty space is fighting for meaning.',
    ],
  },
  {
    id: 'slow-web',
    title: 'The case for a slower web',
    category: 'Technology',
    date: 'Aug 24, 2026',
    readTime: '8 min',
    excerpt:
      'Pages load faster than ever and somehow feel slower to use. A look at where all that speed actually goes.',
    content: [
      'Pages load faster than ever and somehow feel slower to use. Bandwidth went up, devices got quicker, and yet the experience of reading something on the web has never felt more like waiting.',
      'Most of that time doesn\u2019t vanish — it gets spent. On trackers, on auto-playing video, on a dozen scripts negotiating with each other before a single paragraph renders. The page was fast; the product was not.',
      'A slower web, deliberately built, would look almost old-fashioned: fewer dependencies, fewer requests, more trust that the content itself is the reason someone came.',
      'This isn\u2019t nostalgia for 2005. It\u2019s a bet that the sites people keep coming back to are, quietly, the ones that respect their attention the most.',
    ],
  },
  {
    id: 'notebooks',
    title: 'Why I still write in notebooks',
    category: 'Life',
    date: 'Aug 15, 2026',
    readTime: '4 min',
    excerpt:
      'Paper is slower than any app, and that turns out to be exactly the point.',
    content: [
      'Paper is slower than any app, and that turns out to be exactly the point. A notebook can\u2019t autosave, can\u2019t sync, can\u2019t remind you of anything. It just sits there and waits for you to think.',
      'The friction is the feature. Typing keeps pace with talking, so it captures conversation. Handwriting keeps pace with thinking, which is slower and more crooked, and the page ends up looking like that too.',
      'I\u2019ve tried to replicate this digitally more times than I can count. Nothing quite gets the ratio right between how easy it is to write something down and how easy it is to lose it.',
    ],
  },
  {
    id: 'editing-yourself',
    title: 'Editing yourself without losing your voice',
    category: 'Writing',
    date: 'Aug 3, 2026',
    readTime: '7 min',
    excerpt:
      'Most first drafts have two problems and one bad solution. Here is a better way to cut.',
    content: [
      'Most first drafts have two problems: too many words, and not quite the right ones. The bad solution is to cut whatever sounds the most like yourself, because that\u2019s the part that stands out on a re-read.',
      'A better rule: cut the sentence that explains something the next sentence already shows. Explaining and showing side by side feels like generosity but reads like doubt — you didn\u2019t trust the image to land, so you said it twice.',
      'Voice survives editing that removes words. It rarely survives editing that removes risk. If every strange sentence gets smoothed into the safest version of itself, the draft gets shorter and the writing gets quieter in the wrong way.',
    ],
  },
  {
    id: 'small-teams',
    title: 'What small teams get right',
    category: 'Technology',
    date: 'Jul 22, 2026',
    readTime: '5 min',
    excerpt:
      'Not everything that scales is worth scaling. Notes from teams that stayed small on purpose.',
    content: [
      'Not everything that scales is worth scaling. Some of the best-run teams I\u2019ve seen stayed small on purpose, long after they could have justified growing.',
      'The advantage isn\u2019t speed, exactly, though small teams are usually faster. It\u2019s that everyone can hold the whole system in their head at once — the product, the customers, the reasons behind the last six decisions.',
      'Growth trades that shared context for reach. Sometimes that\u2019s the right trade. But it\u2019s worth noticing how much gets rebuilt, in process and documentation, to replace what a small team gets for free.',
    ],
  },
  {
    id: 'margins',
    title: 'Reading in the margins',
    category: 'Life',
    date: 'Jul 10, 2026',
    readTime: '3 min',
    excerpt:
      'A book with no marks in it has usually only been read once, lightly.',
    content: [
      'A book with no marks in it has usually only been read once, lightly. The good ones accumulate a second book in the margins — arguments, questions, a date scribbled next to a line that meant something that year.',
      'I used to think of this as disrespectful to the object. Now I think an unmarked copy is the one that hasn\u2019t been used yet, and that the marks are the only proof that reading actually happened, rather than just the eyes moving.',
    ],
  },
  {
    id: 'default-settings',
    title: 'Nobody reads the default settings',
    category: 'Design',
    date: 'Sep 5, 2026',
    readTime: '5 min',
    excerpt:
      'The choice you don\u2019t ask anyone to make is still a choice. On the quiet power of what ships turned on.',
    content: [
      'The choice you don\u2019t ask anyone to make is still a choice. Most people never open the settings page, which means the default isn\u2019t one option among many — for them, it\u2019s the product.',
      'This is easy to forget when you\u2019re the one building the thing, because you\u2019ve looked at every option and have opinions about all of them. The person using it has looked at none of them and is trusting you to have chosen well on their behalf.',
      'A good default doesn\u2019t just pick the most popular setting. It picks the one that does the least damage if the person never comes back to change it.',
    ],
  },
  {
    id: 'commit-messages',
    title: 'Commit messages are a form of writing',
    category: 'Writing',
    date: 'Aug 29, 2026',
    readTime: '4 min',
    excerpt:
      'A log nobody reads until something breaks is still worth writing well.',
    content: [
      'A commit message is read, on average, by nobody — until the day something breaks, at which point it is read very carefully by someone tired and slightly annoyed. Write for that reader.',
      'The habit that helps most isn\u2019t length, it\u2019s naming the reason instead of the action. The diff already shows what changed; the message\u2019s only job is to say why, which is the part that disappears the fastest from memory.',
      'Good commit history reads like a diary kept by someone who assumed a stranger would need it. That stranger is usually you, eight months later, with no memory of writing it.',
    ],
  },
  {
    id: 'walking-meetings',
    title: 'The best ideas in this job have come from walking',
    category: 'Life',
    date: 'Aug 18, 2026',
    readTime: '3 min',
    excerpt:
      'Not every problem needs a desk. Some just need a change of scenery and no screen.',
    content: [
      'Not every problem needs a desk. Some of the clearest thinking I\u2019ve done at work happened away from one — on a walk, with no notebook and no way to type anything down.',
      'I used to see this as wasted time, because nothing gets produced. But the absence of a keyboard is the point: without somewhere to capture every half-formed thought, only the ones worth keeping survive long enough to remember later.',
    ],
  },
]

export default posts
