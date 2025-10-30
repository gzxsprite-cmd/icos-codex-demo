// -----------------------------
// Data Simulation
// -----------------------------
const caseDataset = [
  {
    id: 'C001',
    client: 'SAIC',
    project: 'Alpha Plus',
    product: 'IPB',
    competitor: 'Conti',
    tech: ['RoPP41', 'RSV'],
    sopYear: 2025,
    sopPrice: 1280,
    prices: { 2025: 1280, 2026: 1240, 2027: 1200, 2028: 1180, 2029: 1165 },
    pcrRate: 3.5,
    pcrYears: 2,
    leadMonth: '2025-09',
    tier: 'L3',
    source: 'Analyzed',
    remarks: 'Strategic realignment with EV platform.',
    terms: 'Volume bonus after 50k units.',
    attachments: ['spec-sheet.pdf'],
    submitter: 'Liu Hong',
    leadDate: '2025-09-10'
  },
  {
    id: 'C002',
    client: 'Geely',
    project: 'Nebula',
    product: 'IPB',
    competitor: 'Bosch',
    tech: ['APB-Mi'],
    sopYear: 2024,
    sopPrice: 1345,
    prices: { 2024: 1345, 2025: 1320, 2026: 1295, 2027: 1270, 2028: 1260 },
    pcrRate: 2.0,
    pcrYears: 3,
    leadMonth: '2025-08',
    tier: 'L2',
    source: 'Confirmed',
    remarks: 'Won after benchmark test.',
    terms: 'Standard warranty.',
    attachments: ['benchmark.xlsx'],
    submitter: 'Chen Yu',
    leadDate: '2025-08-18'
  },
  {
    id: 'C003',
    client: 'BYD',
    project: 'Dragonfly',
    product: 'ESP',
    competitor: 'Conti',
    tech: ['iTPMs'],
    sopYear: 2026,
    sopPrice: 1195,
    prices: { 2026: 1195, 2027: 1180, 2028: 1160, 2029: 1140, 2030: 1125 },
    pcrRate: 1.5,
    pcrYears: 2,
    leadMonth: '2025-07',
    tier: 'L1',
    source: 'Rumor',
    remarks: 'Rumor from supplier day.',
    terms: 'Pending confirmation.',
    attachments: ['notes.docx'],
    submitter: 'Zhao Lei',
    leadDate: '2025-07-02'
  },
  {
    id: 'C004',
    client: 'NIO',
    project: 'Skyline',
    product: 'IPB',
    competitor: 'ZF',
    tech: ['RoPP41'],
    sopYear: 2025,
    sopPrice: 1310,
    prices: { 2025: 1310, 2026: 1280, 2027: 1260, 2028: 1235, 2029: 1220 },
    pcrRate: 2.2,
    pcrYears: 3,
    leadMonth: '2025-06',
    tier: 'L2',
    source: 'Analyzed',
    remarks: 'Competitor price pressure noted.',
    terms: 'Bundle with ABS module.',
    attachments: [],
    submitter: 'Fan Yi',
    leadDate: '2025-06-12'
  },
  {
    id: 'C005',
    client: 'FAW',
    project: 'Crown',
    product: 'iBooster',
    competitor: 'BTL',
    tech: ['WOP', 'RSV'],
    sopYear: 2024,
    sopPrice: 1420,
    prices: { 2024: 1420, 2025: 1400, 2026: 1375, 2027: 1360, 2028: 1345 },
    pcrRate: 2.8,
    pcrYears: 3,
    leadMonth: '2025-05',
    tier: 'L1',
    source: 'Confirmed',
    remarks: 'Signed contract in April.',
    terms: 'Payment 45 days.',
    attachments: ['contract.pdf'],
    submitter: 'Huang Ming',
    leadDate: '2025-05-20'
  },
  {
    id: 'C006',
    client: 'XPeng',
    project: 'Glider',
    product: 'IPB',
    competitor: 'Conti',
    tech: ['RoPP41'],
    sopYear: 2025,
    sopPrice: 1290,
    prices: { 2025: 1290, 2026: 1275, 2027: 1255, 2028: 1230, 2029: 1215 },
    pcrRate: 3.1,
    pcrYears: 2,
    leadMonth: '2025-04',
    tier: 'L3',
    source: 'Analyzed',
    remarks: 'Record low for product family in April snapshot.',
    terms: 'Includes OTA support.',
    attachments: ['analysis.pdf'],
    submitter: 'Jiang Hui',
    leadDate: '2025-04-08'
  },
  {
    id: 'C007',
    client: 'Great Wall',
    project: 'Atlas',
    product: 'ESP',
    competitor: 'Bosch',
    tech: ['APB-Mi'],
    sopYear: 2024,
    sopPrice: 1388,
    prices: { 2024: 1388, 2025: 1370, 2026: 1350, 2027: 1335, 2028: 1318 },
    pcrRate: 1.8,
    pcrYears: 2,
    leadMonth: '2025-03',
    tier: 'L2',
    source: 'Confirmed',
    remarks: 'Competitive discount from Bosch.',
    terms: 'Extended warranty 5 years.',
    attachments: [],
    submitter: 'Ma Qiang',
    leadDate: '2025-03-14'
  },
  {
    id: 'C008',
    client: 'Changan',
    project: 'BlueCore',
    product: 'IPB',
    competitor: 'Conti',
    tech: ['iTPMs'],
    sopYear: 2026,
    sopPrice: 1260,
    prices: { 2026: 1260, 2027: 1245, 2028: 1228, 2029: 1210, 2030: 1195 },
    pcrRate: 2.4,
    pcrYears: 3,
    leadMonth: '2025-02',
    tier: 'L1',
    source: 'Rumor',
    remarks: 'Supplier day rumblings.',
    terms: 'Pending NDA review.',
    attachments: [],
    submitter: 'Lin Tao',
    leadDate: '2025-02-05'
  },
  {
    id: 'C009',
    client: 'Li Auto',
    project: 'NextDay',
    product: 'iBooster',
    competitor: 'ZF',
    tech: ['APB-Mi'],
    sopYear: 2025,
    sopPrice: 1405,
    prices: { 2025: 1405, 2026: 1380, 2027: 1355, 2028: 1330, 2029: 1315 },
    pcrRate: 2.1,
    pcrYears: 2,
    leadMonth: '2025-01',
    tier: 'L1',
    source: 'Confirmed',
    remarks: 'New volume ramp.',
    terms: 'Rebate at 80k units.',
    attachments: ['proposal.pdf'],
    submitter: 'Sun Ke',
    leadDate: '2025-01-22'
  },
  {
    id: 'C010',
    client: 'Hyundai CN',
    project: 'Eagle',
    product: 'IPB',
    competitor: 'Conti',
    tech: ['RoPP41'],
    sopYear: 2024,
    sopPrice: 1335,
    prices: { 2024: 1335, 2025: 1318, 2026: 1302, 2027: 1288, 2028: 1275 },
    pcrRate: 1.9,
    pcrYears: 2,
    leadMonth: '2024-12',
    tier: 'L1',
    source: 'Rumor',
    remarks: 'Regional partner update.',
    terms: 'To be confirmed.',
    attachments: ['email.msg'],
    submitter: 'Wu Di',
    leadDate: '2024-12-28'
  },
  {
    id: 'C011',
    client: 'SAIC',
    project: 'Alpha Max',
    product: 'IPB',
    competitor: 'Conti',
    tech: ['RoPP41', 'iTPMs'],
    sopYear: 2027,
    sopPrice: 1245,
    prices: { 2027: 1245, 2028: 1230, 2029: 1210, 2030: 1195, 2031: 1180 },
    pcrRate: 2.6,
    pcrYears: 3,
    leadMonth: '2025-09',
    tier: 'L1',
    source: 'Analyzed',
    remarks: 'Derived from roadmap negotiations.',
    terms: 'Option to extend warranty.',
    attachments: [],
    submitter: 'Liu Hong',
    leadDate: '2025-09-05'
  },
  {
    id: 'C012',
    client: 'Geely',
    project: 'Nebula Plus',
    product: 'IPB',
    competitor: 'Conti',
    tech: ['RoPP41'],
    sopYear: 2026,
    sopPrice: 1275,
    prices: { 2026: 1275, 2027: 1250, 2028: 1230, 2029: 1210, 2030: 1198 },
    pcrRate: 2.2,
    pcrYears: 2,
    leadMonth: '2025-08',
    tier: 'L2',
    source: 'Confirmed',
    remarks: 'Competitive win over Bosch benchmark.',
    terms: 'Requires service bundle.',
    attachments: ['q2-summary.pdf'],
    submitter: 'Chen Yu',
    leadDate: '2025-08-12'
  },
  {
    id: 'C013',
    client: 'Great Wall',
    project: 'Atlas Hybrid',
    product: 'ESP',
    competitor: 'ZF',
    tech: ['WOP'],
    sopYear: 2026,
    sopPrice: 1220,
    prices: { 2026: 1220, 2027: 1208, 2028: 1190, 2029: 1178, 2030: 1162 },
    pcrRate: 1.7,
    pcrYears: 2,
    leadMonth: '2025-06',
    tier: 'L2',
    source: 'Analyzed',
    remarks: 'Competitor undercut by 3%.',
    terms: 'Bundle with steering ECU.',
    attachments: [],
    submitter: 'Ma Qiang',
    leadDate: '2025-06-25'
  },
  {
    id: 'C014',
    client: 'XPeng',
    project: 'Glider Max',
    product: 'IPB',
    competitor: 'BTL',
    tech: ['APB-Mi'],
    sopYear: 2027,
    sopPrice: 1235,
    prices: { 2027: 1235, 2028: 1210, 2029: 1185, 2030: 1160, 2031: 1145 },
    pcrRate: 2.9,
    pcrYears: 3,
    leadMonth: '2025-07',
    tier: 'L1',
    source: 'Rumor',
    remarks: 'Potential joint venture offer.',
    terms: 'Subject to volume commitment.',
    attachments: [],
    submitter: 'Jiang Hui',
    leadDate: '2025-07-19'
  },
  {
    id: 'C015',
    client: 'Li Auto',
    project: 'NextDay Plus',
    product: 'iBooster',
    competitor: 'Conti',
    tech: ['iTPMs'],
    sopYear: 2026,
    sopPrice: 1355,
    prices: { 2026: 1355, 2027: 1330, 2028: 1310, 2029: 1290, 2030: 1275 },
    pcrRate: 2.0,
    pcrYears: 2,
    leadMonth: '2025-03',
    tier: 'L1',
    source: 'Confirmed',
    remarks: 'Incremental update shared internally.',
    terms: 'Standard clauses.',
    attachments: ['internal-memo.pdf'],
    submitter: 'Sun Ke',
    leadDate: '2025-03-28'
  },
  {
    id: 'C016',
    client: 'Chery',
    project: 'Orion',
    product: 'IPB',
    competitor: 'Bosch',
    tech: ['RoPP41'],
    sopYear: 2025,
    sopPrice: 1295,
    prices: { 2025: 1295, 2026: 1270, 2027: 1248, 2028: 1230, 2029: 1215 },
    pcrRate: 2.4,
    pcrYears: 3,
    leadMonth: '2025-05',
    tier: 'L2',
    source: 'Analyzed',
    remarks: 'RoPP41 bundle won incremental business.',
    terms: 'Includes localization rebate.',
    attachments: ['pricing-note.pdf'],
    submitter: 'He Lin',
    leadDate: '2025-05-12'
  },
  {
    id: 'C017',
    client: 'GAC',
    project: 'Pulse',
    product: 'IPB',
    competitor: 'Conti',
    tech: ['RoPP41', 'iTPMs'],
    sopYear: 2026,
    sopPrice: 1265,
    prices: { 2026: 1265, 2027: 1245, 2028: 1222, 2029: 1205, 2030: 1190 },
    pcrRate: 2.5,
    pcrYears: 2,
    leadMonth: '2025-04',
    tier: 'L1',
    source: 'Confirmed',
    remarks: 'Shared via joint pricing council.',
    terms: '3-year service extension.',
    attachments: ['council-minutes.pdf'],
    submitter: 'Zhou Fei',
    leadDate: '2025-04-26'
  },
  {
    id: 'C018',
    client: 'Dongfeng',
    project: 'Nova',
    product: 'IPB',
    competitor: 'ZF',
    tech: ['RoPP41'],
    sopYear: 2025,
    sopPrice: 1300,
    prices: { 2025: 1300, 2026: 1278, 2027: 1255, 2028: 1235, 2029: 1220 },
    pcrRate: 2.1,
    pcrYears: 2,
    leadMonth: '2025-02',
    tier: 'L2',
    source: 'Analyzed',
    remarks: 'ZF defensive quote spotted by sales.',
    terms: 'Requires bundled calibration service.',
    attachments: ['call-notes.txt'],
    submitter: 'Xu Ran',
    leadDate: '2025-02-18'
  }
];

const segmentConfig = {
  months: ['2024-12', '2025-01', '2025-02', '2025-03', '2025-04', '2025-05', '2025-06', '2025-07', '2025-08', '2025-09'],
  predefined: [
    {
      id: 'segment-ipb',
      name: '产品：IPB',
      summary: '新增 +6 ｜ 新低 2',
      filter: { product: 'IPB', competitors: [], tech: [] }
    },
    {
      id: 'segment-ipb-conti',
      name: '产品：IPB，对手：Conti',
      summary: '新增 +4 ｜ 新低 1',
      filter: { product: 'IPB', competitors: ['Conti'], tech: [] }
    },
    {
      id: 'segment-esp-zf',
      name: '产品：ESP，对手：ZF',
      summary: '新增 +3 ｜ 新低 1',
      filter: { product: 'ESP', competitors: ['ZF'], tech: [] }
    }
  ],
  mySegments: [
    {
      id: 'segment-my-1',
      name: 'IPB Conti RoPP41',
      summary: '新增 +2 ｜ 新低 1',
      filter: { product: 'IPB', competitors: ['Conti'], tech: ['RoPP41'] }
    },
    {
      id: 'segment-my-2',
      name: 'ESP ZF RSV',
      summary: '新增 +1 ｜ 新低 0',
      filter: { product: 'ESP', competitors: ['ZF'], tech: ['RSV'] }
    },
    {
      id: 'segment-my-3',
      name: 'ESP Continental iTPMs',
      summary: '新增 +1 ｜ 新低 0',
      filter: { product: 'ESP', competitors: ['Conti'], tech: ['iTPMs'] }
    }
  ],
  popular: [
    { name: 'IPB Conti', score: 95, filter: { product: 'IPB', competitors: ['Conti'], tech: [] } },
    { name: 'ESP Price Hunt', score: 90, filter: { product: 'ESP', competitors: [], tech: ['APB-Mi'] } },
    { name: 'IPB vs Market', score: 88, filter: { product: 'IPB', competitors: [], tech: [] } },
    { name: 'IPB ZF RSV', score: 86, filter: { product: 'IPB', competitors: ['ZF'], tech: ['RSV'] } },
    { name: 'ESP Global Watch', score: 84, filter: { product: 'ESP', competitors: [], tech: ['iTPMs'] } }
  ],
  leaderboard: {
    monthly: [
      { rank: 1, user: 'Zhang***', count: 9, trend: '↑2' },
      { rank: 2, user: 'Li***', count: 7, trend: '→' },
      { rank: 3, user: 'Wang***', count: 6, trend: '↓1' }
    ],
    quarterly: [
      { rank: 1, user: 'Chen***', count: 18, trend: '↑1' },
      { rank: 2, user: 'Sun***', count: 17, trend: '↓1' },
      { rank: 3, user: 'Liu***', count: 14, trend: '↑2' }
    ]
  }
};

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const DEFAULT_FILTERS = {
  time: '6m',
  product: 'IPB',
  competitors: ['Conti'],
  tech: ['RoPP41'],
  more: { customer: null, volume: null, terms: null }
};

const state = {
  mode: 'focus',
  filters: deepClone(DEFAULT_FILTERS),
  savedFilters: [],
  pinned: new Set(),
  hidden: new Set(),
  dontShowHint: false,
  chartInstance: null,
  exploreMonth: '2025-09',
  exploreSnapshot: 'monthly',
  exploreSegment: null,
  exploreExpanded: { L3: true, L2: true, L1: false },
  leaderboardExpanded: false,
  priceInfoCollapsed: new Set(),
  segmentGroupOpen: { predefined: true, mine: true },
  customSegmentOpen: false,
  activePopularSegment: null,
  flashSegmentName: null
};

// Utility helpers
const parseMonth = (month) => new Date(`${month}-01T00:00:00`);
const monthsDiff = (m1, m2) => {
  const date1 = parseMonth(m1);
  const date2 = parseMonth(m2);
  return (date1.getFullYear() - date2.getFullYear()) * 12 + (date1.getMonth() - date2.getMonth());
};

function getLatestLeadMonth() {
  return caseDataset.reduce((acc, curr) => (acc > curr.leadMonth ? acc : curr.leadMonth), '0000-00');
}

const filtersTimeToMonths = {
  '3m': 3,
  '6m': 6,
  '12m': 12
};

function withinTimeRange(leadMonth, monthsKey) {
  const months = filtersTimeToMonths[monthsKey];
  if (!months) return true;
  return monthsDiff(getLatestLeadMonth(), leadMonth) <= months - 1;
}

function matchesFilters(item, filters) {
  if (filters.product && item.product !== filters.product) return false;
  if (filters.competitors?.length && !filters.competitors.includes(item.competitor)) return false;
  if (filters.tech?.length && !filters.tech.some((tech) => item.tech.includes(tech))) return false;
  if (filters.time && !withinTimeRange(item.leadMonth, filters.time)) return false;
  if (filters.more.customer && item.client !== filters.more.customer) return false;
  return true;
}

const timeLabels = {
  '3m': '近3月',
  '6m': '近6月',
  '12m': '近12月'
};

function getActiveExploreFilter() {
  if (state.exploreSegment?.filter) {
    return state.exploreSegment.filter;
  }
  return {
    product: state.filters.product,
    competitors: state.filters.competitors ?? [],
    tech: state.filters.tech ?? []
  };
}

function buildFocusTags() {
  const filters = state.filters;
  const tags = [];
  if (filters.time) tags.push({ label: `线索时间: ${timeLabels[filters.time] || filters.time}` });
  if (filters.product) tags.push({ label: `产品: ${filters.product}` });
  if (filters.competitors) {
    const text = filters.competitors.length ? filters.competitors.join(', ') : '全部';
    tags.push({ label: `对手: ${text}` });
  }
  if (filters.tech) {
    const text = filters.tech.length ? filters.tech.join(', ') : '全部';
    tags.push({ label: `参数: ${text}` });
  }
  if (filters.more.customer) tags.push({ label: `客户: ${filters.more.customer}` });
  if (filters.more.volume) tags.push({ label: `体量: ${filters.more.volume}` });
  if (filters.more.terms) tags.push({ label: `条款: ${filters.more.terms}` });
  return tags;
}

function buildExploreTags() {
  const tags = [];
  tags.push({ label: `月份: ${formatMonth(state.exploreMonth)}` });
  const segmentName = state.exploreSegment?.name || '全部';
  tags.push({ label: `Segment: ${segmentName}` });
  const filter = getActiveExploreFilter();
  if (filter.product) tags.push({ label: `产品: ${filter.product}` });
  if (filter.competitors) {
    const text = filter.competitors.length ? filter.competitors.join(', ') : '全部';
    tags.push({ label: `对手: ${text}` });
  }
  if (filter.tech) {
    const text = filter.tech.length ? filter.tech.join(', ') : '全部';
    tags.push({ label: `参数: ${text}` });
  }
  return tags;
}

function createTagRow(tags) {
  const row = document.createElement('div');
  row.className = 'active-tags';
  tags.forEach((tag) => {
    const chip = document.createElement('span');
    chip.className = 'tag-chip';
    chip.textContent = tag.label;
    chip.title = `Filtered by: ${tag.label}`;
    row.appendChild(chip);
  });
  return row;
}

// Rendering entry point
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

function renderApp() {
  document.querySelectorAll('.mode-switch-bar .mode-tab').forEach((btn) => {
    const isActive = btn.dataset.mode === state.mode;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  if (state.mode === 'focus') {
    state.exploreSegment = null;
    state.leaderboardExpanded = false;
    state.activePopularSegment = null;
    state.flashSegmentName = null;
    renderFocusStep1();
    renderFocusStep2();
    renderDetailCards(getFocusVisibleCases());
  } else {
    renderExploreStep1();
    renderExploreStep2();
    renderDetailCards(getExploreCases());
  }
}

// -----------------------------
// Focus Mode Rendering
// -----------------------------
function renderFocusStep1() {
  step1.innerHTML = `
    <div class="section-title">
      <h2>Step 1 · Filters</h2>
      <span class="mode-hint">Refine the dataset for pricing analysis.</span>
    </div>
  `;
  const container = document.createElement('div');
  container.className = 'filters';

  const savedBlock = document.createElement('div');
  savedBlock.className = 'filter-group';
  savedBlock.innerHTML = `<h3>Saved Filter Sets</h3>`;
  const savedList = document.createElement('div');
  savedList.className = 'saved-filters';
  if (!state.savedFilters.length) {
    const empty = document.createElement('div');
    empty.className = 'mode-hint';
    empty.textContent = 'Save your frequent combinations for quick access.';
    savedList.appendChild(empty);
  } else {
    state.savedFilters.forEach((saved, idx) => {
      const item = document.createElement('div');
      item.className = 'saved-filter';
      const content = document.createElement('div');
      content.className = 'saved-filter-content';
      content.innerHTML = `<strong>Set ${idx + 1}</strong>
        <span>${saved.time.toUpperCase()} • ${saved.product} • ${saved.competitors.join(', ') || 'All'} • ${saved.tech.join(', ') || 'All'}</span>`;
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'saved-filter-delete';
      deleteBtn.type = 'button';
      deleteBtn.setAttribute('aria-label', `Delete saved set ${idx + 1}`);
      deleteBtn.textContent = '❌';
      deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        openConfirm({
          message: 'Are you sure you want to delete this saved set?',
          confirmLabel: 'Delete',
          onConfirm: () => {
            item.classList.add('is-deleting');
            setTimeout(() => {
              state.savedFilters.splice(idx, 1);
              renderApp();
              showToast('✅ Deleted successfully');
            }, 300);
          }
        });
      });
      item.append(content, deleteBtn);
      item.addEventListener('click', () => {
        state.filters = deepClone(saved);
        renderApp();
      });
      savedList.appendChild(item);
    });
  }
  savedBlock.appendChild(savedList);
  container.appendChild(savedBlock);

  // Time buttons
  const timeGroup = document.createElement('div');
  timeGroup.className = 'filter-group';
  timeGroup.innerHTML = '<h3>Time Range</h3>';
  const timeButtons = document.createElement('div');
  timeButtons.className = 'time-buttons';
  ['3m', '6m', '12m'].forEach((key) => {
    const btn = document.createElement('button');
    btn.textContent = key.toUpperCase();
    if (state.filters.time === key) btn.classList.add('active');
    btn.addEventListener('click', () => {
      state.filters.time = key;
      renderApp();
    });
    timeButtons.appendChild(btn);
  });
  timeGroup.appendChild(timeButtons);
  container.appendChild(timeGroup);

  // Product radio
  const productGroup = document.createElement('div');
  productGroup.className = 'filter-group';
  productGroup.innerHTML = '<h3>Product</h3>';
  const radios = document.createElement('div');
  radios.className = 'radio-group';
  ['IPB', 'ESP', 'iBooster'].forEach((prod) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'product';
    input.value = prod;
    input.checked = state.filters.product === prod;
    input.addEventListener('change', () => {
      state.filters.product = prod;
      renderApp();
    });
    label.appendChild(input);
    const span = document.createElement('span');
    span.textContent = prod;
    label.appendChild(span);
    radios.appendChild(label);
  });
  productGroup.appendChild(radios);
  container.appendChild(productGroup);

  // Competitor chips
  const competitorGroup = document.createElement('div');
  competitorGroup.className = 'filter-group';
  competitorGroup.innerHTML = '<h3>Competitors</h3>';
  const competitorChips = document.createElement('div');
  competitorChips.className = 'chips';
  ['Bosch', 'Conti', 'BTL', 'ZF'].forEach((comp) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.textContent = comp;
    if (state.filters.competitors.includes(comp)) chip.classList.add('active');
    chip.addEventListener('click', () => {
      const idx = state.filters.competitors.indexOf(comp);
      if (idx >= 0) {
      state.filters.competitors.splice(idx, 1);
      } else {
        state.filters.competitors.push(comp);
      }
      renderApp();
    });
    competitorChips.appendChild(chip);
  });
  competitorGroup.appendChild(competitorChips);
  container.appendChild(competitorGroup);

  // Tech chips
  const techGroup = document.createElement('div');
  techGroup.className = 'filter-group';
  techGroup.innerHTML = '<h3>Tech Params</h3>';
  const techChips = document.createElement('div');
  techChips.className = 'chips';
  ['RoPP41', 'APB-Mi', 'iTPMs', 'WOP', 'RSV'].forEach((tech) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.textContent = tech;
    if (state.filters.tech.includes(tech)) chip.classList.add('active');
    chip.addEventListener('click', () => {
      const idx = state.filters.tech.indexOf(tech);
      if (idx >= 0) {
    state.filters.tech.splice(idx, 1);
      } else {
        state.filters.tech.push(tech);
      }
      renderApp();
    });
    techChips.appendChild(chip);
  });
  techGroup.appendChild(techChips);
  container.appendChild(techGroup);

  // More filters
  const moreGroup = document.createElement('div');
  moreGroup.className = 'filter-group';
  moreGroup.innerHTML = `
    <details>
      <summary>More Filters</summary>
      <label>Customer</label>
      <input type="text" value="${state.filters.more.customer ?? ''}" placeholder="Any" />
      <label>Volume Range</label>
      <input type="text" value="${state.filters.more.volume ?? ''}" placeholder="-" />
      <label>Business Terms</label>
      <input type="text" value="${state.filters.more.terms ?? ''}" placeholder="-" />
    </details>
  `;
  const inputs = moreGroup.querySelectorAll('input');
  inputs[0].addEventListener('input', (e) => {
    state.filters.more.customer = e.target.value || null;
  });
  inputs[1].addEventListener('input', (e) => {
    state.filters.more.volume = e.target.value || null;
  });
  inputs[2].addEventListener('input', (e) => {
    state.filters.more.terms = e.target.value || null;
  });
  container.appendChild(moreGroup);

  // Action buttons
  const actions = document.createElement('div');
  actions.className = 'step1-buttons';
  const filterBtn = document.createElement('button');
  filterBtn.textContent = 'Filter';
  filterBtn.className = 'primary';
  filterBtn.addEventListener('click', () => {
    renderApp();
  });
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Reset';
  resetBtn.className = 'ghost';
  resetBtn.addEventListener('click', () => {
    state.filters = deepClone(DEFAULT_FILTERS);
    state.pinned.clear();
    state.hidden.clear();
    state.priceInfoCollapsed.clear();
    renderApp();
  });
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.className = 'ghost';
  saveBtn.addEventListener('click', () => {
    state.savedFilters.unshift(deepClone(state.filters));
    renderApp();
  });
  actions.append(filterBtn, resetBtn, saveBtn);

  container.appendChild(actions);
  step1.appendChild(container);
}

function getFocusFilteredCases() {
  const filtered = caseDataset.filter((item) => matchesFilters(item, state.filters));
  return filtered.filter((item) => !state.hidden.has(item.id));
}

function getFocusVisibleCases() {
  const filtered = getFocusFilteredCases();
  const pinnedCases = caseDataset.filter((item) => state.pinned.has(item.id) && !state.hidden.has(item.id));
  const map = new Map();
  [...pinnedCases, ...filtered].forEach((item) => {
    map.set(item.id, item);
  });
  return Array.from(map.values()).sort((a, b) => (a.leadDate < b.leadDate ? 1 : -1));
}

function renderFocusStep2() {
  step2.innerHTML = '';
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="section-title">
      <h2>Step 2 · Price Trajectory</h2>
      <span class="mode-hint">Multi-line chart of filtered cases</span>
    </div>
  `;
  const tagsRow = createTagRow(buildFocusTags());
  container.appendChild(tagsRow);
  const chartHolder = document.createElement('div');
  chartHolder.className = 'chart-container';
  chartHolder.innerHTML = '<canvas id="priceChart"></canvas>';
  container.appendChild(chartHolder);
  const legendNote = document.createElement('div');
  legendNote.className = 'legend-note';
  legendNote.textContent = 'Click lines or legend items to focus and open details. Latest 10 leads shown when dataset exceeds limit.';
  container.appendChild(legendNote);
  step2.appendChild(container);

  const filtered = getFocusFilteredCases().sort((a, b) => (a.leadDate < b.leadDate ? 1 : -1));
  const latestCases = filtered.slice(0, 10);
  if (filtered.length > 10 && !state.dontShowHint) {
    showChartHint(filtered.length);
  }

  if (!latestCases.length) {
    chartHolder.innerHTML = '<div class="mode-hint">No cases found for the current filters.</div>';
    if (state.chartInstance) {
      state.chartInstance.destroy();
      state.chartInstance = null;
    }
    return;
  }

  const ctx = document.getElementById('priceChart');
  const datasets = latestCases.map((item, idx) => {
    const years = Object.keys(item.prices).map((year) => Number(year));
    const baseColor = chartPalette[idx % chartPalette.length];
    return {
      label: `${item.client} – ${item.project} – ${item.product} – ${item.sopYear}`,
      data: years.map((year) => ({ x: year, y: item.prices[year] })),
      tension: 0.3,
      borderWidth: 2,
      hoverBorderWidth: 3,
      pointRadius: 4,
      borderColor: baseColor,
      backgroundColor: baseColor,
      caseId: item.id,
      baseColor
    };
  });

  if (state.chartInstance) state.chartInstance.destroy();
  const defaultLegendClick = Chart.defaults.plugins.legend.onClick;
  state.chartInstance = new Chart(ctx, {
    type: 'line',
    data: { datasets },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.5,
      interaction: { mode: 'nearest', intersect: false },
      parsing: false,
      scales: {
        x: {
          type: 'linear',
          title: { display: true, text: 'Year' },
          ticks: { precision: 0 }
        },
        y: {
          title: { display: true, text: 'Price (CNY)' }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { usePointStyle: true },
          onClick: (evt, legendItem, legend) => {
            defaultLegendClick.call(legend.chart, evt, legendItem, legend);
            const dataset = legend.chart.data.datasets[legendItem.datasetIndex];
            highlightCase(dataset.caseId);
          },
          onHover: (evt, legendItem, legend) => {
            if (evt?.native?.target) {
              evt.native.target.style.cursor = 'pointer';
            }
            applyChartFocus(legend.chart, legendItem.datasetIndex);
          },
          onLeave: (evt, legendItem, legend) => {
            applyChartFocus(legend.chart, null);
          }
        },
        tooltip: {
          callbacks: {
            title: () => '',
            label: (ctx) => {
              const dataset = ctx.dataset;
              const item = caseDataset.find((c) => c.id === dataset.caseId);
              return `${item.client} ${item.project} | SOP ${item.sopYear} : ${ctx.parsed.y} CNY`;
            }
          }
        }
      },
      onClick: (evt, elements) => {
        if (!elements.length) return;
        const datasetIndex = elements[0].datasetIndex;
        const dataset = state.chartInstance.data.datasets[datasetIndex];
        highlightCase(dataset.caseId);
      },
      onHover: (evt, activeElements) => {
        if (evt?.native?.target) {
          evt.native.target.style.cursor = activeElements.length ? 'pointer' : 'default';
        }
        if (activeElements.length) {
          applyChartFocus(state.chartInstance, activeElements[0].datasetIndex);
        } else {
          applyChartFocus(state.chartInstance, null);
        }
      }
    }
  });
  applyChartFocus(state.chartInstance, null);
}

const chartPalette = ['#0B5CFF', '#3B82F6', '#6366F1', '#F59E0B', '#EF4444', '#10B981', '#14B8A6', '#8B5CF6', '#EC4899', '#F97316'];

function hexToRgba(hex, alpha = 1) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function applyChartFocus(chart, focusIndex) {
  if (!chart) return;
  chart.data.datasets.forEach((dataset, idx) => {
    const isActive = focusIndex === null || focusIndex === idx;
    const alpha = isActive ? 1 : 0.3;
    dataset.borderColor = hexToRgba(dataset.baseColor, alpha);
    dataset.backgroundColor = hexToRgba(dataset.baseColor, alpha);
    dataset.borderWidth = isActive && focusIndex !== null ? 3 : 2;
  });
  chart.update('none');
}

function showChartHint(total) {
  const modal = document.getElementById('chartHintModal');
  hideHintCheckbox.checked = state.dontShowHint;
  modal.classList.remove('hidden');
  document.getElementById('datasetCount').textContent = total;
  setTimeout(() => {
    if (!state.dontShowHint) {
      modal.classList.add('hidden');
    }
  }, 5000);
}

// -----------------------------
// Explore Mode Rendering
// -----------------------------
function activateExploreSegment(segment, options = {}) {
  state.exploreSegment = segment;
  state.filters = {
    time: '6m',
    product: segment.filter.product,
    competitors: segment.filter.competitors ?? [],
    tech: segment.filter.tech ?? [],
    more: { customer: null, volume: null, terms: null }
  };
  state.mode = 'explore';
  if (options.popularName) {
    state.activePopularSegment = options.popularName;
  } else {
    state.activePopularSegment = null;
  }
  renderApp();
}

function renderExploreStep1() {
  step1.innerHTML = `
    <div class="section-title">
      <h2>Step 1 · Segments</h2>
      <span class="mode-hint">Pick a segment or snapshot to explore fresh leads.</span>
    </div>
  `;
  const container = document.createElement('div');
  container.className = 'segment-section';

  const monthNav = document.createElement('div');
  monthNav.className = 'month-nav';
  const prevBtn = document.createElement('button');
  prevBtn.textContent = '◀';
  prevBtn.addEventListener('click', () => {
    shiftMonth(-1);
  });
  const nextBtn = document.createElement('button');
  nextBtn.textContent = '▶';
  nextBtn.addEventListener('click', () => {
    shiftMonth(1);
  });
  const monthLabel = document.createElement('div');
  monthLabel.innerHTML = `<strong>${formatMonth(state.exploreMonth)}</strong>`;
  const select = document.createElement('select');
  segmentConfig.months.forEach((month) => {
    const option = document.createElement('option');
    option.value = month;
    option.textContent = formatMonth(month);
    if (month === state.exploreMonth) option.selected = true;
    select.appendChild(option);
  });
  select.addEventListener('change', (e) => {
    state.exploreMonth = e.target.value;
    renderApp();
  });
  monthNav.append(prevBtn, monthLabel, nextBtn, select);
  container.appendChild(monthNav);
  const buildSegmentCard = (segment, { deletable = false } = {}) => {
    const row = document.createElement('div');
    row.className = 'segment-card';
    if (state.exploreSegment?.id === segment.id) {
      row.classList.add('active');
    }
    const info = document.createElement('div');
    info.className = 'segment-card-info';
    info.innerHTML = `<strong>${segment.name}</strong><span>${segment.summary}</span>`;
    const actions = document.createElement('div');
    actions.className = 'segment-card-actions';
    const useBtn = document.createElement('button');
    useBtn.type = 'button';
    useBtn.className = 'segment-find';
    useBtn.textContent = '查找';
    useBtn.addEventListener('click', () => {
      state.flashSegmentName = null;
      activateExploreSegment(segment);
    });
    actions.appendChild(useBtn);
    if (deletable) {
      const delBtn = document.createElement('button');
      delBtn.type = 'button';
      delBtn.className = 'segment-delete';
      delBtn.textContent = '❌';
      delBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        openConfirm({
          message: 'Are you sure you want to delete this segment?',
          confirmLabel: 'Delete',
          onConfirm: () => {
            row.classList.add('is-deleting');
            setTimeout(() => {
              segmentConfig.mySegments = segmentConfig.mySegments.filter((s) => s.id !== segment.id);
              if (state.exploreSegment?.id === segment.id) {
                state.exploreSegment = null;
                state.activePopularSegment = null;
              }
              showToast('✅ Segment deleted');
              renderApp();
            }, 300);
          }
        });
      });
      actions.appendChild(delBtn);
    }
    row.append(info, actions);
    row.addEventListener('click', (event) => {
      if (event.target.closest('button')) return;
      useBtn.click();
    });
    return row;
  };

  const renderGroup = (key, title, segments, options = {}) => {
    const group = document.createElement('div');
    group.className = 'segment-group';
    const header = document.createElement('button');
    header.type = 'button';
    header.className = 'collapsible-header';
    if (state.segmentGroupOpen[key] === undefined) {
      state.segmentGroupOpen[key] = true;
    }
    const expanded = state.segmentGroupOpen[key];
    header.setAttribute('aria-expanded', String(expanded));
    header.innerHTML = `<span>${title}</span><span class="chevron" aria-hidden="true">▸</span>`;
    header.addEventListener('click', () => {
      state.segmentGroupOpen[key] = !state.segmentGroupOpen[key];
      renderExploreStep1();
    });
    group.appendChild(header);
    const body = document.createElement('div');
    body.className = 'collapsible-body segment-card-list';
    if (!segments.length) {
      const empty = document.createElement('div');
      empty.className = 'mode-hint';
      empty.textContent = options.deletable ? 'No saved segments yet.' : 'No segments available.';
      body.appendChild(empty);
    } else {
      segments.forEach((segment) => {
        const card = buildSegmentCard(segment, { deletable: options.deletable });
        body.appendChild(card);
      });
    }
    group.appendChild(body);
    container.appendChild(group);
    requestAnimationFrame(() => {
      body.style.maxHeight = expanded ? `${body.scrollHeight}px` : '0px';
      group.classList.toggle('expanded', expanded);
    });
  };

  renderGroup('predefined', 'Predefined Segments', segmentConfig.predefined);
  renderGroup('mine', 'My Segments', segmentConfig.mySegments, { deletable: true });

  const customGroup = document.createElement('div');
  customGroup.className = 'segment-group custom-segment';
  const customHeader = document.createElement('button');
  customHeader.type = 'button';
  customHeader.className = 'collapsible-header';
  customHeader.innerHTML = `<span>Create Custom Segment</span><span class="chevron" aria-hidden="true">▸</span>`;
  customHeader.setAttribute('aria-expanded', String(state.customSegmentOpen));
  customHeader.addEventListener('click', () => {
    state.customSegmentOpen = !state.customSegmentOpen;
    renderExploreStep1();
  });
  customGroup.appendChild(customHeader);
  const customBody = document.createElement('div');
  customBody.className = 'collapsible-body custom-segment-body';

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Segment Name';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'customSegmentName';
  nameInput.placeholder = 'My Watchlist';
  const grid = document.createElement('div');
  grid.className = 'custom-segment-grid';

  const productGroup = document.createElement('div');
  productGroup.className = 'custom-field';
  productGroup.innerHTML = '<span>产品</span>';
  const productSelect = document.createElement('select');
  productSelect.id = 'customSegmentProduct';
  ['IPB', 'ESP', 'iBooster'].forEach((prod) => {
    const option = document.createElement('option');
    option.value = prod;
    option.textContent = prod;
    productSelect.appendChild(option);
  });
  productGroup.appendChild(productSelect);

  const competitorGroup = document.createElement('div');
  competitorGroup.className = 'custom-field';
  competitorGroup.innerHTML = '<span>对手</span>';
  const competitorWrap = document.createElement('div');
  competitorWrap.className = 'chips';
  ['Bosch', 'Conti', 'BTL', 'ZF'].forEach((comp) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.textContent = comp;
    chip.addEventListener('click', () => {
      if (chip.classList.contains('active')) {
        chip.classList.remove('active');
      } else {
        chip.classList.add('active');
      }
    });
    competitorWrap.appendChild(chip);
  });
  competitorGroup.appendChild(competitorWrap);

  const techGroup = document.createElement('div');
  techGroup.className = 'custom-field span-2';
  techGroup.innerHTML = '<span>技术参数</span>';
  const techWrap = document.createElement('div');
  techWrap.className = 'chips';
  ['RoPP41', 'APB-Mi', 'iTPMs', 'WOP', 'RSV'].forEach((tech) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.textContent = tech;
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
    });
    techWrap.appendChild(chip);
  });
  techGroup.appendChild(techWrap);

  grid.append(productGroup, competitorGroup, techGroup);

  const actionBar = document.createElement('div');
  actionBar.className = 'segment-actions';
  const saveBtn = document.createElement('button');
  saveBtn.type = 'button';
  saveBtn.className = 'primary';
  saveBtn.textContent = '⭐ Save Segment';
  const useBtn = document.createElement('button');
  useBtn.type = 'button';
  useBtn.className = 'ghost';
  useBtn.textContent = 'Use Now';
  actionBar.append(saveBtn, useBtn);

  customBody.append(nameLabel, nameInput, grid, actionBar);
  customGroup.appendChild(customBody);
  container.appendChild(customGroup);

  const popularGroup = document.createElement('div');
  popularGroup.className = 'segment-group popular-segments';
  const popularHeader = document.createElement('h4');
  popularHeader.textContent = 'Top 10 Popular Segments';
  popularGroup.appendChild(popularHeader);
  segmentConfig.popular.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'popular-row';
    row.dataset.popular = item.name;
    row.innerHTML = `<span>${item.name}</span><span>Score ${item.score}</span>`;
    if (state.activePopularSegment === item.name) {
      row.classList.add('active');
    }
    if (state.flashSegmentName === item.name) {
      row.classList.add('flash');
      setTimeout(() => {
        row.classList.remove('flash');
        if (state.flashSegmentName === item.name) {
          state.flashSegmentName = null;
        }
      }, 320);
    }
    row.addEventListener('click', () => {
      state.flashSegmentName = item.name;
      showToast(`🔍 Segment "${item.name}" loaded`);
      activateExploreSegment(
        {
          id: `popular-${item.name}`,
          name: item.name,
          summary: '热门 Segment',
          filter: item.filter
        },
        { popularName: item.name }
      );
    });
    popularGroup.appendChild(row);
  });
  container.appendChild(popularGroup);

  step1.appendChild(container);

  const getCustomValues = () => {
    const competitors = Array.from(competitorWrap.querySelectorAll('.chip.active')).map((chip) => chip.textContent);
    const tech = Array.from(techWrap.querySelectorAll('.chip.active')).map((chip) => chip.textContent);
    const name = nameInput.value || 'Untitled Segment';
    return { product: productSelect.value, competitors, tech, name };
  };

  const persistSegment = (values, toastMessage) => {
    const segment = {
      id: `segment-${Date.now()}`,
      name: values.name,
      summary: '新增 +0 ｜ 新低 0',
      filter: { product: values.product, competitors: values.competitors, tech: values.tech }
    };
    segmentConfig.mySegments.unshift(segment);
    showToast(toastMessage);
    state.segmentGroupOpen.mine = true;
    renderApp();
  };

  saveBtn.addEventListener('click', () => {
    const values = getCustomValues();
    persistSegment(values, '💾 Saved to My Segments');
  });

  useBtn.addEventListener('click', () => {
    const values = getCustomValues();
    const segment = {
      id: `custom-${Date.now()}`,
      name: values.name,
      summary: '自定义筛选',
      filter: { product: values.product, competitors: values.competitors, tech: values.tech }
    };
    showToast(`🔍 Segment "${segment.name}" loaded`);
    activateExploreSegment(segment);
  });

  requestAnimationFrame(() => {
    customBody.style.maxHeight = state.customSegmentOpen ? `${customBody.scrollHeight}px` : '0px';
    customGroup.classList.toggle('expanded', state.customSegmentOpen);
  });
}

function shiftMonth(delta) {
  const idx = segmentConfig.months.indexOf(state.exploreMonth);
  const nextIdx = Math.min(Math.max(idx + delta, 0), segmentConfig.months.length - 1);
  state.exploreMonth = segmentConfig.months[nextIdx];
  renderApp();
}

function formatMonth(month) {
  const [year, mo] = month.split('-');
  return `${year}年${mo}月`;
}

function matchesSegment(item, segmentFilter) {
  if (!segmentFilter) return true;
  if (segmentFilter.product && item.product !== segmentFilter.product) return false;
  if (segmentFilter.competitors?.length && !segmentFilter.competitors.includes(item.competitor)) return false;
  if (segmentFilter.tech?.length && !segmentFilter.tech.some((tech) => item.tech.includes(tech))) return false;
  return true;
}

function getExploreCases() {
  return caseDataset
    .filter(
      (item) =>
        item.leadMonth === state.exploreMonth &&
        matchesSegment(item, getActiveExploreFilter()) &&
        !state.hidden.has(item.id)
    )
    .sort((a, b) => (a.leadDate < b.leadDate ? 1 : -1));
}

function shiftMonthString(month, delta) {
  const date = parseMonth(month);
  date.setMonth(date.getMonth() + delta);
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, '0');
  const candidate = `${y}-${m}`;
  return segmentConfig.months.includes(candidate) ? candidate : null;
}

function getQuarterMonths(month) {
  const date = parseMonth(month);
  const quarterStart = date.getMonth() - (date.getMonth() % 3);
  const months = [];
  for (let i = 0; i < 3; i++) {
    const temp = new Date(date);
    temp.setMonth(quarterStart + i);
    const y = temp.getFullYear();
    const m = `${temp.getMonth() + 1}`.padStart(2, '0');
    const candidate = `${y}-${m}`;
    if (segmentConfig.months.includes(candidate)) {
      months.push(candidate);
    }
  }
  return months;
}

function aggregateCasesBySubmitter(months, segmentFilter) {
  const counts = new Map();
  caseDataset.forEach((item) => {
    if (!months.includes(item.leadMonth)) return;
    if (state.hidden.has(item.id)) return;
    if (!matchesSegment(item, segmentFilter)) return;
    counts.set(item.submitter, (counts.get(item.submitter) || 0) + 1);
  });
  return counts;
}

function computeLeaderboard(scope) {
  const segmentFilter = getActiveExploreFilter();
  const currentMonths = scope === 'monthly' ? [state.exploreMonth] : getQuarterMonths(state.exploreMonth);
  const previousAnchor = scope === 'monthly' ? shiftMonthString(state.exploreMonth, -1) : shiftMonthString(state.exploreMonth, -3);
  const previousMonths = previousAnchor ? (scope === 'monthly' ? [previousAnchor] : getQuarterMonths(previousAnchor)) : [];

  const currentCounts = aggregateCasesBySubmitter(currentMonths, segmentFilter);
  const previousCounts = previousMonths.length ? aggregateCasesBySubmitter(previousMonths, segmentFilter) : new Map();

  const sorted = [...currentCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);
  if (!sorted.length) {
    return segmentConfig.leaderboard[scope].map((item) => ({ ...item }));
  }

  return sorted.map(([user, count], index) => {
    const prev = previousCounts.get(user) || 0;
    let trend = '→';
    if (count > prev) trend = `↑${count - prev}`;
    if (count < prev) trend = `↓${prev - count}`;
    return { rank: index + 1, user, count, trend };
  });
}

function renderExploreStep2() {
  step2.innerHTML = `
    <div class="section-title">
      <h2>Step 2 · Incremental Overview</h2>
      <span class="mode-hint">Track new records by severity level.</span>
    </div>
  `;
  const container = document.createElement('div');
  container.className = 'incremental';
  const tagsRow = createTagRow(buildExploreTags());
  container.appendChild(tagsRow);
  const kpis = document.createElement('div');
  kpis.className = 'kpi-summary';
  const cases = getExploreCases();
  const tierCounts = { L1: 0, L2: 0, L3: 0 };
  cases.forEach((item) => tierCounts[item.tier]++);
  kpis.textContent = `This Month: +${cases.length} new | ${tierCounts.L2} broke competitor lows | ${tierCounts.L3} broke product lows`;
  container.appendChild(kpis);

  if (!cases.length) {
    const empty = document.createElement('p');
    empty.className = 'mode-hint';
    empty.textContent = 'No cases found for the selected month and segment.';
    container.appendChild(empty);
  }

  const tiers = [
    { key: 'L3', title: '🟥 L3 – New record low for product category', color: 'l3' },
    { key: 'L2', title: '🟨 L2 – New record low vs competitor', color: 'l2' },
    { key: 'L1', title: '🩶 L1 – Normal new additions', color: 'l1' }
  ];

  tiers.forEach((tier) => {
    const section = document.createElement('div');
    section.className = `incremental-section tier-${tier.key.toLowerCase()}`;
    const header = document.createElement('button');
    header.type = 'button';
    header.className = 'collapsible-header';
    const expanded = state.exploreExpanded[tier.key];
    header.setAttribute('aria-expanded', String(expanded));
    header.innerHTML = `<span>${tier.title}</span><span class="chevron" aria-hidden="true">▸</span>`;
    header.addEventListener('click', () => {
      state.exploreExpanded[tier.key] = !state.exploreExpanded[tier.key];
      renderExploreStep2();
      renderDetailCards(getExploreCases());
    });
    section.appendChild(header);

    const list = document.createElement('ul');
    list.className = 'collapsible-body incremental-list';
    cases.filter((c) => c.tier === tier.key).forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<h5>${item.sopPrice} CNY <span class="tag ${tier.key.toLowerCase()}">${tier.key}</span></h5>
        <div>${item.client} – ${item.project} – ${item.product} ｜ SOP ${item.sopYear}</div>
        <span>Lead Month: ${formatMonth(item.leadMonth)}</span>`;
      li.addEventListener('click', () => highlightCase(item.id));
      list.appendChild(li);
    });
    section.appendChild(list);
    container.appendChild(section);
    requestAnimationFrame(() => {
      list.style.maxHeight = expanded ? `${list.scrollHeight}px` : '0px';
      header.setAttribute('aria-expanded', String(expanded));
      section.classList.toggle('expanded', expanded);
    });
  });

  const leaderboardContainer = document.createElement('div');
  leaderboardContainer.className = 'leaderboard-container';
  const toggle = document.createElement('button');
  toggle.className = 'leaderboard-toggle';
  toggle.type = 'button';
  toggle.innerHTML = state.leaderboardExpanded ? '▾ 收起贡献榜' : '▸ 查看贡献榜';
  toggle.addEventListener('click', () => {
    state.leaderboardExpanded = !state.leaderboardExpanded;
    renderApp();
  });
  leaderboardContainer.appendChild(toggle);

  if (state.leaderboardExpanded) {
    const panel = document.createElement('div');
    panel.className = 'leaderboard-panel';
    const scope = document.createElement('div');
    scope.className = 'leaderboard-scope';
    ['monthly', 'quarterly'].forEach((key) => {
      const scopeBtn = document.createElement('button');
      scopeBtn.textContent = key === 'monthly' ? 'Monthly' : 'Quarterly';
      scopeBtn.type = 'button';
      if (state.exploreSnapshot === key) scopeBtn.classList.add('active');
      scopeBtn.addEventListener('click', () => {
        state.exploreSnapshot = key;
        renderApp();
      });
      scope.appendChild(scopeBtn);
    });
    panel.appendChild(scope);

    const lbList = document.createElement('div');
    lbList.className = 'leaderboard-list';
    computeLeaderboard(state.exploreSnapshot).forEach((item) => {
      const row = document.createElement('div');
      row.className = 'leaderboard-row';
      row.innerHTML = `<span>#${item.rank} ${item.user}</span><span>${item.count} cases ｜ ${item.trend}</span>`;
      lbList.appendChild(row);
    });
    panel.appendChild(lbList);
    leaderboardContainer.appendChild(panel);
  }

  container.appendChild(leaderboardContainer);

  step2.appendChild(container);
}

// -----------------------------
// Shared Detail Cards
// -----------------------------
function renderDetailCards(cases) {
  step3.innerHTML = `
    <div class="section-title">
      <h2>Step 3 · Case Detail Cards</h2>
      <span class="mode-hint">Pinned cases stay even if filters change.</span>
    </div>
  `;
  const panel = document.createElement('div');
  panel.className = 'details-panel';
  const resetBar = document.createElement('div');
  resetBar.className = 'detail-reset';
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset Pins & Hides';
  resetButton.addEventListener('click', () => {
    state.pinned.clear();
    state.hidden.clear();
    state.priceInfoCollapsed.clear();
    renderApp();
  });
  resetBar.appendChild(resetButton);
  panel.appendChild(resetBar);
  const container = document.createElement('div');
  container.className = 'detail-cards';
  cases.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.id = `card-${item.id}`;
    const priceCollapsed = state.priceInfoCollapsed.has(item.id);
    card.innerHTML = `
      <h3>${item.sopPrice} CNY</h3>
      <h4>${item.client} – ${item.project} – ${item.product} ｜ SOP ${item.sopYear}</h4>
      <div class="card-section">
        <strong>1. Project Info</strong>
        <dl>
          <dt>Client</dt><dd>${item.client}</dd>
          <dt>Project</dt><dd>${item.project}</dd>
          <dt>Product</dt><dd>${item.product}</dd>
          <dt>SOP</dt><dd>${item.sopYear}</dd>
          <dt>Competitor</dt><dd>${item.competitor}</dd>
          <dt>Tech</dt><dd>${item.tech.join(', ')}</dd>
          <dt>Lead Month</dt><dd>${formatMonth(item.leadMonth)}</dd>
          <dt>Submitter</dt><dd>${item.submitter}</dd>
        </dl>
      </div>
      <div class="card-section price-info ${priceCollapsed ? 'collapsed' : 'expanded'}">
        <button class="collapse-toggle" type="button" data-price-toggle>
          <span>2. Price Info</span>
          <span class="chevron" aria-hidden="true">▸</span>
        </button>
        <div class="price-info-body">
          <dl>
            ${Object.keys(item.prices).map((year) => `<dt>${year}</dt><dd>${item.prices[year]} CNY</dd>`).join('')}
            <dt>PCR Rate</dt><dd>${item.pcrRate ?? '-'}%</dd>
            <dt>PCR Years</dt><dd>${item.pcrYears ?? '-'}</dd>
          </dl>
        </div>
      </div>
      <div class="card-section">
        <details>
          <summary>3. Background Info</summary>
          <p><strong>Remarks:</strong> ${item.remarks}</p>
          <p><strong>Source Type:</strong> ${item.source}</p>
          <p><strong>Special Terms:</strong> ${item.terms || 'None'}</p>
          <p><strong>Attachments:</strong> ${item.attachments.length ? item.attachments.join(', ') : 'None'}</p>
        </details>
      </div>
      <div class="card-actions">
        <button data-pin="${item.id}">📌 Pin</button>
        <button data-hide="${item.id}">👁 Hide</button>
      </div>
    `;
    card.querySelector('[data-pin]').addEventListener('click', () => {
      if (state.pinned.has(item.id)) {
        state.pinned.delete(item.id);
      } else {
        state.pinned.add(item.id);
      }
      renderApp();
    });
    card.querySelector('[data-hide]').addEventListener('click', () => {
      state.hidden.add(item.id);
      renderApp();
    });
    const priceSection = card.querySelector('.price-info');
    const body = priceSection.querySelector('.price-info-body');
    requestAnimationFrame(() => {
      body.style.maxHeight = priceSection.classList.contains('collapsed') ? '0px' : `${body.scrollHeight}px`;
    });
    priceSection.querySelector('[data-price-toggle]').addEventListener('click', () => {
      const willCollapse = !priceSection.classList.contains('collapsed');
      priceSection.classList.toggle('collapsed', willCollapse);
      priceSection.classList.toggle('expanded', !willCollapse);
      if (willCollapse) {
        state.priceInfoCollapsed.add(item.id);
        body.style.maxHeight = '0px';
      } else {
        state.priceInfoCollapsed.delete(item.id);
        body.style.maxHeight = `${body.scrollHeight}px`;
      }
    });
    container.appendChild(card);
  });
  panel.appendChild(container);
  step3.appendChild(panel);
}

function highlightCase(caseId) {
  const card = document.getElementById(`card-${caseId}`);
  if (!card) return;
  card.classList.add('highlight', 'glow');
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => card.classList.remove('glow'), 1000);
  setTimeout(() => card.classList.remove('highlight'), 1200);
}

// -----------------------------
// Floating Button / Modal Logic
// -----------------------------
const newLeadBtn = document.getElementById('newLeadBtn');
const newLeadModal = document.getElementById('newLeadModal');
const leadForm = document.getElementById('leadForm');
const toast = document.getElementById('toast');
const hideHintCheckbox = document.getElementById('hideHintCheckbox');
const confirmModal = document.getElementById('confirmModal');
const confirmTitleEl = document.getElementById('confirmTitle');
const confirmMessageEl = document.getElementById('confirmMessage');
const confirmOkBtn = confirmModal.querySelector('[data-confirm="ok"]');
const confirmCancelBtn = confirmModal.querySelector('[data-confirm="cancel"]');

let confirmState = null;

function openConfirm({ message, title = 'Confirm', confirmLabel = 'Confirm', cancelLabel = 'Cancel', onConfirm }) {
  confirmTitleEl.textContent = title;
  confirmMessageEl.textContent = message;
  confirmOkBtn.textContent = confirmLabel;
  confirmCancelBtn.textContent = cancelLabel;
  confirmModal.classList.remove('hidden');
  confirmState = { onConfirm };
}

function closeConfirm() {
  confirmModal.classList.add('hidden');
  confirmState = null;
}

hideHintCheckbox.addEventListener('change', (e) => {
  state.dontShowHint = e.target.checked;
  if (e.target.checked) {
    document.getElementById('chartHintModal').classList.add('hidden');
  }
});

newLeadBtn.addEventListener('click', () => {
  const context = getContextDefaults();
  document.getElementById('leadProduct').value = context.product || '';
  document.getElementById('leadCompetitor').value = context.competitor || '';
  document.getElementById('leadTech').value = context.tech || '';
  newLeadModal.classList.remove('hidden');
});

newLeadModal.addEventListener('click', (e) => {
  if (e.target.dataset.close !== undefined || e.target === newLeadModal) {
    closeLeadModal();
  }
});

confirmModal.addEventListener('click', (e) => {
  if (e.target === confirmModal) {
    closeConfirm();
  }
});

confirmCancelBtn.addEventListener('click', () => {
  closeConfirm();
});

confirmOkBtn.addEventListener('click', () => {
  const callback = confirmState?.onConfirm;
  closeConfirm();
  if (callback) callback();
});

function closeLeadModal() {
  newLeadModal.classList.add('hidden');
  leadForm.reset();
}

leadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const techInput = document.getElementById('leadTech').value;
  const leadMonthValue = state.mode === 'explore' ? state.exploreMonth : getLatestLeadMonth();
  const newCase = {
    id: `C${Math.floor(1000 + Math.random() * 9000)}`,
    client: document.getElementById('leadCustomer').value,
    project: document.getElementById('leadProject').value,
    product: document.getElementById('leadProduct').value || state.filters.product,
    competitor: document.getElementById('leadCompetitor').value || (state.filters.competitors[0] || 'Conti'),
    tech: techInput ? techInput.split(',').map((v) => v.trim()).filter(Boolean) : [...state.filters.tech],
    sopYear: Number(document.getElementById('leadSop').value),
    sopPrice: Number(document.getElementById('leadPrice').value),
    prices: {},
    pcrRate: Number(document.getElementById('leadPcrRate').value) || null,
    pcrYears: Number(document.getElementById('leadPcrYears').value) || null,
    competitorProduct: document.getElementById('leadCompProduct').value || null,
    leadMonth: leadMonthValue,
    tier: 'L1',
    source: 'User Submitted',
    remarks: document.getElementById('leadTerms').value ? `Terms: ${document.getElementById('leadTerms').value}` : 'User supplied lead.',
    terms: document.getElementById('leadTerms').value,
    attachments: [],
    submitter: 'You',
    leadDate: `${leadMonthValue}-20`
  };
  const baseYear = newCase.sopYear;
  for (let i = 0; i < 5; i++) {
    newCase.prices[baseYear + i] = Math.max(newCase.sopPrice - i * 20, 0);
  }
  caseDataset.unshift(newCase);
  closeLeadModal();
  showToast('✅ New price lead saved successfully!');
  renderApp();
});

function getContextDefaults() {
  if (state.mode === 'focus') {
    return {
      product: state.filters.product,
      competitor: state.filters.competitors.join(', '),
      tech: state.filters.tech.join(', ')
    };
  }
  const segment = state.exploreSegment;
  return {
    product: segment?.filter.product || state.filters.product,
    competitor: segment?.filter.competitors?.join(', ') || state.filters.competitors.join(', '),
    tech: segment?.filter.tech?.join(', ') || state.filters.tech.join(', ')
  };
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 2000);
}

// -----------------------------
// Mode Switch & Modal handlers
// -----------------------------
document.querySelectorAll('.mode-switch-bar .mode-tab').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.mode = btn.dataset.mode;
    renderApp();
  });
});

document.getElementById('chartHintModal').addEventListener('click', (e) => {
  if (e.target.id === 'chartHintModal') {
    e.currentTarget.classList.add('hidden');
  }
  if (e.target.id === 'adjustFilters') {
    state.mode = 'focus';
    e.currentTarget.classList.add('hidden');
    renderApp();
  }
  if (e.target.id === 'advancedFilter') {
    alert('Advanced filters are part of the enterprise release.');
  }
});

// Initial render
renderApp();
