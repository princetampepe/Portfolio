export const profileImage = new URL('../../my pic/Tampepe_ID.jpg', import.meta.url).href;
export const darkProfileImage = new URL('../../optimized/sunglasses-display.jpg', import.meta.url).href;
export const resumeFile = new URL('../../resume/PRINCE CHRISTIAN T. TAMPEPE.pdf', import.meta.url).href;
export const siteLogo = new URL('../../optimized/logo-display.jpg', import.meta.url).href;

export const logoAssets = {
  chatGpt: new URL('../../logos/chat gpt ㅣㅐ해 - Google 검색.jpg', import.meta.url).href,
  claude: new URL('../../logos/Claude Logo - Claude Ai - Claude Code Sticker.jpg', import.meta.url).href,
  github: new URL('../../logos/Dominando GitHub_ Tu guía completa para principiantes.jpg', import.meta.url).href,
  deepseek: new URL('../../logos/Why DeepSeek’s logo represents a new era of AI branding.jpg', import.meta.url).href,
  vscode: new URL('../../logos/Visual Studio Code logo in vector format - Brandlogos_net.jpg', import.meta.url).href,
  linkedin: new URL('../../logos/Inloggen.jpg', import.meta.url).href,
  extra: new URL('../../logos/download (6).jpg', import.meta.url).href,
};

export const disciplineAssets = {
  uxDesign: new URL('../../scroll stack pics/ux design.jpg', import.meta.url).href,
  productThinking: new URL('../../scroll stack pics/product thinking.jpg', import.meta.url).href,
  frontEnd: new URL('../../scroll stack pics/front end developing.jpg', import.meta.url).href,
  aiIntegration: new URL('../../scroll stack pics/ai integration.jpg', import.meta.url).href,
  userResearch: new URL('../../scroll stack pics/user research.jpg', import.meta.url).href,
  interfaceDesign: new URL('../../scroll stack pics/interface design.jpg', import.meta.url).href,
};

export const projectAssets = {
  aiAgent: new URL('../../optimized/ai-agent-display.jpg', import.meta.url).href,
  abducted: new URL('../../projects pics/abducted.jpeg', import.meta.url).href,
};

const designImageModules = import.meta.glob('../../pic for designs/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const designGalleryItems = Object.entries(designImageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, image]) => {
    const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') || 'Design Study';
    const text = fileName
      .replace(/[-_]+/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\b(ai|ui|ux)\b/gi, (match) => match.toUpperCase())
      .trim();

    return {
      image,
      text: text.length > 34 ? `${text.slice(0, 31).trim()}...` : text,
    };
  });
