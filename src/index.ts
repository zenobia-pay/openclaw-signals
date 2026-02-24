import { Hono } from 'hono'

const app = new Hono()

interface Account {
  handle: string
  name: string
  bio: string
  tier: string
}

function getAccounts(): Account[] {
  return [
    // Core & Maintainers
    { handle: '@steipete', name: 'Peter Steinberger', bio: 'OpenClaw creator', tier: 'Core' },
    { handle: '@openclaw_', name: 'OpenClaw', bio: 'Official project account', tier: 'Core' },
    { handle: '@theguti', name: 'Guti', bio: 'Official maintainer, memory tweaks, scaling tests', tier: 'Core' },
    { handle: '@KrauseFx', name: 'Felix Krause', bio: 'Beeper/Homey/Fastmail integrations, Discord ecosystem', tier: 'Core' },
    { handle: '@chrisbanes', name: 'Chris Banes', bio: 'Mobile-first Telegram setups', tier: 'Core' },
    { handle: '@Rasmic', name: 'Rasmic', bio: 'Deep config breakdowns, internals explainer', tier: 'Core' },

    // Multi-Agent Swarm & Orchestration
    { handle: '@jdrhyne', name: 'JD Rhyne', bio: '15+ agent army: email, slides, code, trading, GA4/JIRA/GSC', tier: 'Swarm' },
    { handle: '@iamtrebuh', name: 'Trebuh', bio: '4 specialized agents (Milo/Bob/Angela/Josh) with shared memory on VPS', tier: 'Swarm' },
    { handle: '@danpeguine', name: 'Dan Peguine', bio: 'Sub-agents for biz ideas, timeblocking, calendar conflict resolution', tier: 'Swarm' },
    { handle: '@itsjoaki', name: 'Joaki', bio: '5+ agents with inter-agent chat + cyberpunk visualization', tier: 'Swarm' },
    { handle: '@kaostyl', name: 'Kaostyl', bio: 'Memory hierarchy, parallel batches, cron loops, validation rules', tier: 'Swarm' },
    { handle: '@pseudotheos', name: 'Pseudotheos', bio: 'Homebrew memory systems + auto-build pipelines', tier: 'Swarm' },
    { handle: '@willcheung', name: 'Will Cheung', bio: '0-employee company via @calautobot, heavy memory/skill tweaking', tier: 'Swarm' },
    { handle: '@calautobot', name: 'Cal Autobot', bio: 'Will Cheung\'s autonomous company agent', tier: 'Swarm' },
    { handle: '@CryptoNoosphere', name: 'CryptoNoosphere', bio: 'Cognitive-science-inspired swarm orchestration', tier: 'Swarm' },

    // Hardware, Local & Edge
    { handle: '@bprintco', name: 'Alex B', bio: 'M4 Mac Mini autonomous YouTube channel (Remotion)', tier: 'Hardware' },
    { handle: '@nexgen_ruben', name: 'Ruben', bio: 'Pure local Ollama, zero API cost on Mac Mini', tier: 'Hardware' },
    { handle: '@Dittoloves_you', name: 'Ditto', bio: 'Ollama 0.17 integration experiments', tier: 'Hardware' },
    { handle: '@hmzsol', name: 'HMZ', bio: '4× Mac Mini crypto scanning/backtesting rigs', tier: 'Hardware' },
    { handle: '@AlbertMoral', name: 'Albert Moral', bio: 'Raspberry Pi + Cloudflare, WHOOP health metrics', tier: 'Hardware' },
    { handle: '@bangkokbuild', name: 'Bangkok Build', bio: 'Garmin/Obsidian/GitHub/VPS, earthquake monitoring', tier: 'Hardware' },
    { handle: '@iannuttall', name: 'Ian Nuttall', bio: 'Dedicated hardware, custom cron/event systems', tier: 'Hardware' },
    { handle: '@alghali', name: 'Alghali', bio: 'Local GLM 30B running 6-agent company ops', tier: 'Hardware' },

    // Skill Creators & Tool Builders
    { handle: '@milesdeutscher', name: 'Miles Deutscher', bio: 'Curated skill goldmine (qmd, supermemory, prompt-guard)', tier: 'Skills' },
    { handle: '@aiedge_', name: 'AI Edge', bio: 'Skill curation, security self-check', tier: 'Skills' },
    { handle: '@oliverhenry', name: 'Oliver Henry', bio: 'Free Larry/LarryBrain skills + guided installs', tier: 'Skills' },
    { handle: '@swiftlysingh', name: 'Swiftly Singh', bio: 'Excalidraw diagrams from JSON via NL', tier: 'Skills' },
    { handle: '@LLMJunky', name: 'LLM Junky', bio: 'Gmail/Calendar rollups + orchestration layer', tier: 'Skills' },
    { handle: '@MagiMetal', name: 'MagiMetal', bio: 'macOS menu bar app for status/logs', tier: 'Skills' },
    { handle: '@pepicrft', name: 'Pedro Piñera', bio: 'OpenClaw plugin for Ralph projects', tier: 'Skills' },
    { handle: '@GetPercept', name: 'Percept', bio: 'Ambient voice intelligence (speaker auth)', tier: 'Skills' },
    { handle: '@chubes4', name: 'Chubes', bio: 'WordPress multisite empire automation', tier: 'Skills' },
    { handle: '@0xAA_Science', name: '0xAA', bio: 'Deep technical skill mechanism breakdowns', tier: 'Skills' },
    { handle: '@Hesamation', name: 'Hesamation', bio: 'Curated repo of real-world use cases', tier: 'Skills' },

    // Security & Reliability
    { handle: '@DataRepublican', name: 'DataRepublican', bio: 'Strict micro-management of tools/databases', tier: 'Security' },
    { handle: '@astuyve', name: 'AJ Stuyvenberg', bio: 'Scoped Gmail OAuth + security wrappers', tier: 'Security' },
    { handle: '@nickvasiles', name: 'Nick Vasiles', bio: 'Computer-use wrappers for legacy workflows', tier: 'Security' },
    { handle: '@bradmillscan', name: 'Brad Mills', bio: 'SOP.md + playbook systems', tier: 'Security' },
    { handle: '@beeman_nl', name: 'Beeman', bio: 'Isolated VPS, PR-only intern model', tier: 'Security' },

    // Business Automation
    { handle: '@nateliason', name: 'Nat Eliason', bio: 'Gave "Felix" $1k to launch autonomous business', tier: 'Business' },
    { handle: '@dreetje', name: 'Dreetje', bio: 'Spam filter, autonomous ordering, 1Password, bloodwork→Notion', tier: 'Business' },
    { handle: '@avi_press', name: 'Avi Press', bio: 'Linear cleanup, prospecting via WhatsApp, insurance claims', tier: 'Business' },
    { handle: '@davekiss', name: 'Dave Kiss', bio: 'Rebuilt website (Notion→Astro+DNS) via Telegram while watching Netflix', tier: 'Business' },
    { handle: '@antonplex', name: 'Anton Plex', bio: 'Log skill: thoughts→tasks→overnight experiments→ADRs', tier: 'Business' },
    { handle: '@DhruvalGolakiya', name: 'Dhruval', bio: 'macOS menu bar + Supabase todos from email/Slack', tier: 'Business' },
    { handle: '@jordymaui', name: 'Jordy Maui', bio: 'Fastest setup guides + @loyalmomobot', tier: 'Business' },
    { handle: '@loyalmomobot', name: 'Loyal Momo', bio: 'Jordy\'s assistant bot', tier: 'Business' },
    { handle: '@ayushtweetshere', name: 'Ayush', bio: 'VPS sub-agents + GitHub/Vercel family pipelines', tier: 'Business' },
    { handle: '@georgedagg_', name: 'George Dagg', bio: 'Voice-while-walking DevOps: log, fix, redeploy', tier: 'Business' },
    { handle: '@armanddp', name: 'Armand', bio: 'Flight check-in + window seat while driving', tier: 'Business' },
    { handle: '@IamAdiG', name: 'Adi G', bio: '@learnfromlenny WhatsApp bot, replaced half apps', tier: 'Business' },
    { handle: '@learnfromlenny', name: 'Lenny Bot', bio: 'Adi\'s WhatsApp learning assistant', tier: 'Business' },
    { handle: '@bondwithchloe', name: 'Chloe', bio: 'DIY vs productized chief-of-staff agents, YC builder', tier: 'Business' },

    // On-Chain & Agent Economy
    { handle: '@0xDeployer', name: '0xDeployer', bio: 'Direct NFT minting via custom wallet skill', tier: 'OnChain' },
    { handle: '@Clawdex_On_Base', name: 'Clawdex', bio: 'Autonomous Polymarket trader + self-learning', tier: 'OnChain' },
    { handle: '@Scampi_tech', name: 'Scampi', bio: 'Turns any OpenClaw skill into Pump.fun memecoin', tier: 'OnChain' },
    { handle: '@bankrbot', name: 'Bankr', bio: 'DeFi/wallet/treasury primitives for agents', tier: 'OnChain' },
    { handle: '@Admuad', name: 'Admuad', bio: 'Polymarket prediction agent system (GitHub)', tier: 'OnChain' },
    { handle: '@yode3e', name: 'Yode', bio: 'Solana wallet funding, coin launches, farming', tier: 'OnChain' },
    { handle: '@0xSammy', name: '0xSammy', bio: 'Catalog of agent economy tools/launchpads', tier: 'OnChain' },

    // Niche & Emerging
    { handle: '@andrewjiang', name: 'Andrew Jiang', bio: 'Pulled 4M X posts from 100 accounts in 24h', tier: 'Niche' },
    { handle: '@manuelmaly', name: 'Manuel Maly', bio: 'TUI prototyping → sub-agent summaries → optimization loop', tier: 'Niche' },
    { handle: '@stevecaldwell', name: 'Steve Caldwell', bio: '"Crawdad" family meal planner (weather-based)', tier: 'Niche' },
    { handle: '@acevail_', name: 'Acevail', bio: 'Full homelab/SSH/Home Assistant via Telegram', tier: 'Niche' },
    { handle: '@Philo01', name: 'Philo', bio: '"I.R.I.S." agent for on-the-go app dev + Tailscale', tier: 'Niche' },
    { handle: '@TechWith_Nova', name: 'Nova', bio: '6-agent local biz lead-gen agency (auto close sales)', tier: 'Niche' },
    { handle: '@thekitze', name: 'Kitze', bio: 'Autonomous Amazon + local-store shopping', tier: 'Niche' },
    { handle: '@aibra', name: 'Aibra', bio: 'Real-estate scraping with MLS-style filters', tier: 'Niche' },
    { handle: '@TaraViswanathan', name: 'Tara', bio: 'Proactive discount-code hunting (beats Honey)', tier: 'Niche' },
  ]
}

function twitterUrl(handle: string): string {
  return `https://twitter.com/${handle.replace('@', '')}`
}

app.get('/', (c) => {
  const accounts = getAccounts()
  const tiers = ['Core', 'Swarm', 'Hardware', 'Skills', 'Security', 'Business', 'OnChain', 'Niche']
  const tierLabels: Record<string, string> = {
    'Core': 'Core & Maintainers',
    'Swarm': 'Multi-Agent Swarm',
    'Hardware': 'Hardware & Local',
    'Skills': 'Skill Creators',
    'Security': 'Security & Reliability',
    'Business': 'Business Automation',
    'OnChain': 'On-Chain & Economy',
    'Niche': 'Niche & Emerging'
  }

  const tableRows = tiers.map(tier => {
    const tierAccounts = accounts.filter(a => a.tier === tier)
    const headerRow = `<tr class="tier-row"><td colspan="4">${tierLabels[tier] || tier} <span class="tier-count">${tierAccounts.length}</span></td></tr>`
    const rows = tierAccounts.map(a => `<tr>
<td class="handle"><a href="${twitterUrl(a.handle)}" target="_blank" rel="noopener">${a.handle}</a></td>
<td class="name">${a.name}</td>
<td class="bio">${a.bio || '\u2014'}</td>
<td class="tier-tag ${tier.toLowerCase()}">${tier}</td>
</tr>`).join('\n')
    return headerRow + '\n' + rows
  }).join('\n')

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OpenClaw Signals</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body {
  background: #faf9f7;
  color: #111;
  font-family: -apple-system, system-ui, sans-serif;
  font-size: 12px;
  line-height: 1.4;
  min-height: 100vh;
}
header {
  padding: 24px 32px 16px;
  border-bottom: 1px solid #e5e3df;
}
h1 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}
.subtitle {
  color: #666;
  font-size: 12px;
}
.count {
  color: #999;
  font-size: 11px;
  margin-top: 8px;
}
main {
  padding: 0 32px 48px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}
th, td {
  text-align: left;
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
}
th {
  position: sticky;
  top: 0;
  background: #faf9f7;
  font-weight: 500;
  color: #666;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #ddd;
}
.tier-row td {
  background: #f5f3f0;
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #555;
  padding: 12px;
  border-bottom: none;
}
.tier-count {
  font-weight: 400;
  color: #999;
  margin-left: 8px;
}
.handle {
  font-family: 'SF Mono', 'Menlo', monospace;
  font-size: 11px;
}
.handle a {
  color: #0066cc;
  text-decoration: none;
}
.handle a:hover {
  text-decoration: underline;
}
.name {
  font-weight: 500;
}
.bio {
  color: #666;
  max-width: 400px;
}
.tier-tag {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 2px 6px;
  border-radius: 3px;
  background: #eee;
  color: #666;
}
.tier-tag.core { background: #dc2626; color: white; }
.tier-tag.swarm { background: #7c3aed; color: white; }
.tier-tag.hardware { background: #059669; color: white; }
.tier-tag.skills { background: #2563eb; color: white; }
.tier-tag.security { background: #d97706; color: white; }
.tier-tag.business { background: #0891b2; color: white; }
.tier-tag.onchain { background: #4f46e5; color: white; }
.tier-tag.niche { background: #6b7280; color: white; }
tr:hover {
  background: #f9f8f6;
}
</style>
</head>
<body>
<header>
  <h1>🦞 OpenClaw Signals</h1>
  <p class="subtitle">High-signal builders in the OpenClaw/Moltbot ecosystem</p>
  <p class="count">${accounts.length} accounts tracked • <a href="/briefing" style="color:#2563eb">View Today's Briefing →</a></p>
</header>
<main>
<table>
<thead>
<tr>
<th>Handle</th>
<th>Name</th>
<th>Bio</th>
<th>Tier</th>
</tr>
</thead>
<tbody>
${tableRows}
</tbody>
</table>
</main>
</body>
</html>`
  return c.html(html)
})

// Briefing route
app.get('/briefing', (c) => {
  const briefingHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OpenClaw Intelligence Briefing - Feb 24, 2026</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body {
  background: #faf9f7;
  color: #1a1a1a;
  font-family: -apple-system, system-ui, sans-serif;
  font-size: 15px;
  line-height: 1.7;
  min-height: 100vh;
}
.wrap { max-width: 800px; margin: 0 auto; padding: 32px 24px 64px; }
header { margin-bottom: 32px; padding-bottom: 24px; border-bottom: 2px solid #e5e3df; }
h1 { font-size: 28px; font-weight: 700; margin-bottom: 4px; }
.meta { font-size: 14px; color: #666; }
.nav { margin-top: 16px; }
.nav a { color: #2563eb; text-decoration: none; font-size: 13px; }
h2 { font-size: 20px; font-weight: 600; margin: 32px 0 16px; padding-bottom: 8px; border-bottom: 1px solid #eee; }
h3 { font-size: 16px; font-weight: 600; margin: 24px 0 12px; }
p { margin-bottom: 12px; }
.highlight { background: #fef3c7; padding: 16px; border-radius: 8px; margin: 16px 0; border-left: 4px solid #f59e0b; }
.case { background: #fff; border: 1px solid #e5e3df; border-radius: 8px; padding: 16px; margin: 12px 0; }
.case-title { font-weight: 600; margin-bottom: 8px; }
.case-who { font-family: monospace; color: #2563eb; font-size: 13px; }
.case-desc { color: #444; font-size: 14px; margin-top: 8px; }
table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px; }
th, td { text-align: left; padding: 8px 12px; border-bottom: 1px solid #eee; }
th { background: #f5f3f0; font-weight: 500; }
code { background: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-size: 13px; }
.warning { background: #fef2f2; border-left: 4px solid #ef4444; padding: 12px 16px; margin: 16px 0; border-radius: 4px; }
footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e3df; font-size: 12px; color: #888; text-align: center; }
</style>
</head>
<body>
<div class="wrap">
<header>
  <h1>🦞 OpenClaw Intelligence Briefing</h1>
  <div class="meta">February 24, 2026 • 295+ signals collected</div>
  <div class="nav"><a href="/">← Back to Signals</a></div>
</header>

<div class="highlight">
<strong>Executive Summary:</strong> OpenClaw (ex-Clawdbot/Moltbot) is the viral open-source AI agent framework. People are building autonomous businesses, multi-agent swarms, on-chain trading systems, and hardware integrations — far beyond basic chat.
</div>

<h2>💰 Top Story: $400K Polymarket Arbitrage</h2>
<div class="case">
  <div class="case-who">@Sara_kiu</div>
  <div class="case-desc">
    <strong>+$400K in under a month</strong> • ~$5/sec • ~$7K/day<br>
    Trades 5-min BTC Up/Down markets. Pure structural arbitrage: when YES + NO &lt; $1, guaranteed profit at settlement. 6,823 trades executed autonomously. No direction prediction — just math.
  </div>
</div>

<h2>🎬 Faceless YouTube Channel</h2>
<div class="case">
  <div class="case-who">@bprintco</div>
  <div class="case-desc">
    M4 Pro Mac Mini running fully autonomous YouTube channel via Remotion + Pixabay + Chatterbox APIs. "I do nothing."
  </div>
</div>

<h2>🤖 Multi-Agent Swarms</h2>
<table>
<tr><th>Builder</th><th>Setup</th><th>What They Do</th></tr>
<tr><td>@DuridSukar</td><td>8 agents via Telegram</td><td>Entire business ops. "Not a single prompt from me today"</td></tr>
<tr><td>@jdrhyne</td><td>15+ agent army</td><td>Email, slides, code, trading, GA4/JIRA/GSC</td></tr>
<tr><td>@itsjoaki</td><td>5+ agents</td><td>Inter-agent chat + cyberpunk dashboard</td></tr>
<tr><td>@kaostyl</td><td>Memory hierarchy</td><td>Session → daily → thematic → semantic search</td></tr>
</table>

<h2>📊 Lead Generation Agency</h2>
<div class="case">
  <div class="case-who">@TechWith_Nova</div>
  <div class="case-desc">
    6-agent system: Find companies without websites → Auto-generate demos → Outreach → Handle objections → Close sales
  </div>
</div>
<div class="case">
  <div class="case-who">@atyachin</div>
  <div class="case-desc">21% conversion rate with OpenClaw lead gen skills</div>
</div>

<h2>🦾 Hardware Deployments</h2>
<table>
<tr><th>Builder</th><th>Setup</th></tr>
<tr><td>@rakhmatuli79742</td><td>Raspberry Pi + PIEEG brain-computer interface</td></tr>
<tr><td>@hmzsol</td><td>4× Mac Mini crypto scanning rigs</td></tr>
<tr><td>@alghali</td><td>Local GLM 30B running 6-agent company</td></tr>
</table>

<h2>💼 Zero-Employee Companies</h2>
<div class="case">
  <div class="case-who">@willcheung / @calautobot</div>
  <div class="case-desc">Literal 0-employee company run entirely by AI agents</div>
</div>
<div class="case">
  <div class="case-who">@nateliason</div>
  <div class="case-desc">Gave agent "Felix" $1K to autonomously launch business (site, product, X account)</div>
</div>

<h2>🔗 On-Chain Agents</h2>
<table>
<tr><th>Builder</th><th>What</th></tr>
<tr><td>@0xDeployer</td><td>Direct NFT minting via wallet skill</td></tr>
<tr><td>@yode3e</td><td>Solana wallet funding, coin launches</td></tr>
<tr><td>@Scampi_tech</td><td>Turns skills into Pump.fun memecoins</td></tr>
</table>

<div class="warning">
<strong>⚠️ Security Notes:</strong><br>
• @Scobleizer: "OpenClaw isn't secure"<br>
• @mhaeberli: WhatsApp banned him for TOS (chatting with own OpenClaw)<br>
• Meta AI researcher's agent went rogue on email<br>
<strong>Best practice:</strong> Use <code>trash</code> not <code>rm</code>, scoped OAuth, confirmation for destructive actions
</div>

<h2>📈 Market Signals</h2>
<ul>
<li><strong>Peter Steinberger acqui-hired by OpenAI</strong> — leading next-gen personal AI agents</li>
<li>OpenClaw becoming independent open-source foundation</li>
<li>@aixbt_agent: "500k users, agent economy scaling fast"</li>
</ul>

<footer>
OpenClaw Intelligence Briefing • Generated 2026-02-24 05:00 EST
</footer>
</div>
</body>
</html>`
  return c.html(briefingHtml)
})

export default app
