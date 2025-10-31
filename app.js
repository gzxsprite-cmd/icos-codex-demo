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
    leadDate: '2025-09-10',
    volume: 52000
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
    leadDate: '2025-08-18',
    volume: 44000
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
    leadDate: '2025-07-02',
    volume: 38000
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
    leadDate: '2025-06-12',
    volume: 41000
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
    leadDate: '2025-05-20',
    volume: 36000
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
    leadDate: '2025-04-08',
    volume: 39000
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
    leadDate: '2025-03-14',
    volume: 35000
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
    leadDate: '2025-02-05',
    volume: 33000
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
    leadDate: '2025-01-22',
    volume: 42000
  },
  {
    id: 'C010',
    client: 'Hyundai CN',
    project: 'Eagle',
    product: 'IPB',
    competitor: 'Conti',
    tech: ['RoPP41'],
    sopYear: 2025,
    sopPrice: 1305,
    prices: { 2025: 1305, 2026: 1288, 2027: 1264, 2028: 1240, 2029: 1225 },
    pcrRate: 2.6,
    pcrYears: 2,
    leadMonth: '2024-12',
    tier: 'L2',
    source: 'Analyzed',
    remarks: 'Aligned with Korean EV launch.',
    terms: 'Bundled service contract.',
    attachments: ['benchmark.xlsx'],
    submitter: 'Park Jin',
    leadDate: '2024-12-18',
    volume: 37000
  },
  {
    id: 'C011',
    client: 'SAIC',
    project: 'Voyager',
    product: 'IPB',
    competitor: 'Conti',
    tech: ['RoPP41', 'iTPMs'],
    sopYear: 2026,
    sopPrice: 1255,
    prices: { 2026: 1255, 2027: 1235, 2028: 1215, 2029: 1195, 2030: 1185 },
    pcrRate: 2.3,
    pcrYears: 2,
    leadMonth: '2025-08',
    tier: 'L3',
    source: 'Analyzed',
    remarks: 'EV variant update.',
    terms: 'Extra rebate if volume exceeds 60k.',
    attachments: ['concept.pdf'],
    submitter: 'Gu Wei',
    leadDate: '2025-08-02',
    volume: 54000
  },
  {
    id: 'C012',
    client: 'Chery',
    project: 'Nova-E',
    product: 'IPB',
    competitor: 'Bosch',
    tech: ['APB-Mi'],
    sopYear: 2025,
    sopPrice: 1325,
    prices: { 2025: 1325, 2026: 1300, 2027: 1275, 2028: 1250, 2029: 1235 },
    pcrRate: 2.0,
    pcrYears: 3,
    leadMonth: '2025-07',
    tier: 'L2',
    source: 'Confirmed',
    remarks: 'Competitive pressure from Bosch follow-up.',
    terms: 'Includes retrofit support.',
    attachments: ['retrofit.docx'],
    submitter: 'Deng Qi',
    leadDate: '2025-07-19',
    volume: 41000
  },
  {
    id: 'C013',
    client: 'XPeng',
    project: 'Falcon',
    product: 'ESP',
    competitor: 'Conti',
    tech: ['iTPMs', 'RSV'],
    sopYear: 2026,
    sopPrice: 1210,
    prices: { 2026: 1210, 2027: 1190, 2028: 1170, 2029: 1150, 2030: 1135 },
    pcrRate: 1.9,
    pcrYears: 2,
    leadMonth: '2025-09',
    tier: 'L3',
    source: 'Analyzed',
    remarks: 'RSV package upsell opportunity.',
    terms: 'Early commitment rebate.',
    attachments: ['upsell.pdf'],
    submitter: 'Luo Ming',
    leadDate: '2025-09-05',
    volume: 36000
  },
  {
    id: 'C014',
    client: 'BYD',
    project: 'Seagull',
    product: 'IPB',
    competitor: 'Bosch',
    tech: ['RoPP41'],
    sopYear: 2025,
    sopPrice: 1275,
    prices: { 2025: 1275, 2026: 1245, 2027: 1220, 2028: 1198, 2029: 1180 },
    pcrRate: 2.7,
    pcrYears: 3,
    leadMonth: '2025-06',
    tier: 'L2',
    source: 'Confirmed',
    remarks: 'Volume revision mid-year.',
    terms: 'Price tied to cobalt index.',
    attachments: [],
    submitter: 'He Jia',
    leadDate: '2025-06-22',
    volume: 47000
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
    leadDate: '2025-03-28',
    volume: 39000
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
    leadDate: '2025-05-12',
    volume: 43000
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
    leadDate: '2025-04-26',
    volume: 38000
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
    leadDate: '2025-02-18',
    volume: 41000
  }
];

const messageFeed = [
  { id: 'M001', caseId: 'C013', received: '2025-10-29', status: 'LMP candidate' },
  { id: 'M002', caseId: 'C006', received: '2025-10-27', status: 'equal LMP' },
  { id: 'M003', caseId: 'C011', received: '2025-10-24', status: 'Normal' },
  { id: 'M004', caseId: 'C017', received: '2025-10-22', status: 'Normal' },
  { id: 'M005', caseId: 'C002', received: '2025-10-18', status: 'equal LMP' },
  { id: 'M006', caseId: 'C008', received: '2025-10-16', status: 'LMP candidate' },
  { id: 'M007', caseId: 'C005', received: '2025-10-15', status: 'Normal' }
].map((item) => ({ ...item, read: false }));

const statusClassMap = {
  Normal: 'status-normal',
  'equal LMP': 'status-equal',
  'LMP candidate': 'status-lmp'
};

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const DEFAULT_FILTERS = {
  time: '6m',
  product: 'IPB',
  competitors: ['Conti'],
  tech: ['RoPP41'],
  sopYear: null,
  more: { customer: null, volume: null, terms: null }
};

const state = {
  filters: deepClone(DEFAULT_FILTERS),
  savedFilters: [],
  chartInstance: null,
  priceInfoCollapsed: new Set(),
  chartSort: 'recent',
  currentCases: [],
  fullFilteredCount: 0,
  messageSort: 'date',
  messagesOpen: false,
  unreadMessages: messageFeed.filter((m) => !m.read).length,
  pendingHighlight: null,
  editingCaseId: null,
  leadModalMode: 'create',
  limitToastCount: null
};

const filtersTimeToMonths = {
  '3m': 3,
  '6m': 6,
  '12m': 12
};

// -----------------------------
// Helper utilities
// -----------------------------
function parseMonth(month) {
  return new Date(`${month}-01T00:00:00`);
}

function monthsDiff(m1, m2) {
  const date1 = parseMonth(m1);
  const date2 = parseMonth(m2);
  return (date1.getFullYear() - date2.getFullYear()) * 12 + (date1.getMonth() - date2.getMonth());
}

function getLatestLeadMonth() {
  return caseDataset.reduce((acc, curr) => (acc > curr.leadMonth ? acc : curr.leadMonth), '0000-00');
}

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
  if (filters.sopYear && Number(filters.sopYear) !== Number(item.sopYear)) return false;
  if (filters.more.customer && item.client !== filters.more.customer) return false;
  if (filters.more.volume && String(item.volume) !== String(filters.more.volume)) return false;
  if (filters.more.terms && !(item.terms || '').toLowerCase().includes(filters.more.terms.toLowerCase())) return false;
  return true;
}

function getMinPrice(item) {
  return Math.min(...Object.values(item.prices));
}

function buildFocusTags() {
  const filters = state.filters;
  const tags = [];
  const timeLabels = { '3m': '近3月', '6m': '近6月', '12m': '近12月' };
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
  if (filters.sopYear) tags.push({ label: `SOP年份: ${filters.sopYear}` });
  if (filters.more.customer) tags.push({ label: `客户: ${filters.more.customer}` });
  if (filters.more.volume) tags.push({ label: `体量: ${filters.more.volume}` });
  if (filters.more.terms) tags.push({ label: `条款: ${filters.more.terms}` });
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

function formatCurrency(value) {
  return `${Math.round(value).toLocaleString()} CNY`;
}

function computeVisibleCases() {
  const filtered = caseDataset.filter((item) => matchesFilters(item, state.filters));
  let sorted = filtered.slice();
  if (state.chartSort === 'recent') {
    sorted.sort((a, b) => (a.leadDate < b.leadDate ? 1 : a.leadDate > b.leadDate ? -1 : 0));
  } else {
    sorted.sort((a, b) => {
      const diff = getMinPrice(a) - getMinPrice(b);
      if (diff !== 0) return diff;
      return a.leadDate < b.leadDate ? 1 : -1;
    });
  }
  const limited = sorted.slice(0, 12);
  return { cases: limited, total: sorted.length };
}

function getCaseById(id) {
  return caseDataset.find((item) => item.id === id);
}

function updateMessagesBadge() {
  const badge = document.getElementById('messagesBadge');
  if (!badge) return;
  badge.textContent = state.unreadMessages;
  badge.classList.toggle('hidden', state.unreadMessages === 0);
}

// -----------------------------
// Rendering functions
// -----------------------------
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

function renderApp() {
  const computed = computeVisibleCases();
  state.currentCases = computed.cases;
  state.fullFilteredCount = computed.total;
  renderStep1();
  renderStep2(computed);
  renderStep3(state.currentCases);
  updateMessagesBadge();
  if (state.pendingHighlight) {
    highlightCase(state.pendingHighlight);
    state.pendingHighlight = null;
  }
}

function renderStep1() {
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
  savedBlock.innerHTML = '<h3>Saved Filter Sets</h3>';
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
      const competitorText = saved.competitors.length ? saved.competitors.join(', ') : 'All';
      const techText = saved.tech.length ? saved.tech.join(', ') : 'All';
      const sopText = saved.sopYear ? saved.sopYear : 'Any';
      content.innerHTML = `<strong>Set ${idx + 1}</strong>
        <span>${saved.time.toUpperCase()} • ${saved.product} • ${competitorText} • ${techText} • SOP ${sopText}</span>`;
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

  const moreGroup = document.createElement('div');
  moreGroup.className = 'filter-group';
  moreGroup.innerHTML = `
    <details>
      <summary>More Filters</summary>
      <label>SOP Year</label>
      <input type="number" value="${state.filters.sopYear ?? ''}" placeholder="Any" />
      <label>Customer</label>
      <input type="text" value="${state.filters.more.customer ?? ''}" placeholder="Any" />
      <label>Volume</label>
      <input type="text" value="${state.filters.more.volume ?? ''}" placeholder="-" />
      <label>Business Terms</label>
      <input type="text" value="${state.filters.more.terms ?? ''}" placeholder="-" />
    </details>
  `;
  const inputs = moreGroup.querySelectorAll('input');
  inputs[0].addEventListener('input', (e) => {
    state.filters.sopYear = e.target.value ? Number(e.target.value) : null;
  });
  inputs[1].addEventListener('input', (e) => {
    state.filters.more.customer = e.target.value || null;
  });
  inputs[2].addEventListener('input', (e) => {
    state.filters.more.volume = e.target.value || null;
  });
  inputs[3].addEventListener('input', (e) => {
    state.filters.more.terms = e.target.value || null;
  });
  container.appendChild(moreGroup);

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

const chartPalette = ['#0B5CFF', '#3B82F6', '#6366F1', '#F59E0B', '#EF4444', '#10B981', '#14B8A6', '#8B5CF6', '#EC4899', '#F97316', '#1D4ED8', '#0EA5E9'];

const lowestLineGlow = {
  id: 'lowestLineGlow',
  afterDatasetsDraw(chart) {
    const ctx = chart.ctx;
    chart.data.datasets.forEach((dataset, index) => {
      if (!dataset.isLowest) return;
      const meta = chart.getDatasetMeta(index);
      if (!meta || meta.hidden) return;
      ctx.save();
      ctx.shadowColor = 'rgba(11, 92, 255, 0.45)';
      ctx.shadowBlur = 12;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = dataset.borderWidth;
      ctx.strokeStyle = dataset.borderColor;
      ctx.beginPath();
      meta.dataset.draw(ctx);
      ctx.restore();
    });
  }
};

function renderStep2({ cases, total }) {
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

  const sortBar = document.createElement('div');
  sortBar.className = 'sort-toggle';
  sortBar.innerHTML = `
    <span class="mode-hint">Sort visible lines:</span>
    <div class="sort-buttons">
      <button type="button" data-sort="recent" ${state.chartSort === 'recent' ? 'class="active"' : ''}>By Recent Lead</button>
      <button type="button" data-sort="price" ${state.chartSort === 'price' ? 'class="active"' : ''}>By Price Ascending</button>
    </div>
  `;
  sortBar.querySelectorAll('[data-sort]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const value = btn.getAttribute('data-sort');
      if (state.chartSort !== value) {
        state.chartSort = value;
        renderApp();
      }
    });
  });
  container.appendChild(sortBar);

  const chartHolder = document.createElement('div');
  chartHolder.className = 'chart-container';
  chartHolder.innerHTML = '<canvas id="priceChart"></canvas>';
  container.appendChild(chartHolder);

  const minTableContainer = document.createElement('div');
  minTableContainer.className = 'min-price-table-container hidden';
  container.appendChild(minTableContainer);

  const legendNote = document.createElement('div');
  legendNote.className = 'legend-note';
  legendNote.textContent = 'Hover or tap to focus a case. Click the legend to isolate a line and open its details.';
  container.appendChild(legendNote);

  step2.appendChild(container);

  if (total > 12 && state.limitToastCount !== total) {
    showToast('Only top 12 cases are displayed.');
    state.limitToastCount = total;
  } else if (total <= 12) {
    state.limitToastCount = null;
  }

  if (!cases.length) {
    chartHolder.innerHTML = '<div class="mode-hint">No cases found for the current filters.</div>';
    minTableContainer.innerHTML = '';
    minTableContainer.classList.add('hidden');
    if (state.chartInstance) {
      state.chartInstance.destroy();
      state.chartInstance = null;
    }
    return;
  }

  const ctx = document.getElementById('priceChart');
  const datasets = cases.map((item, idx) => {
    const years = Object.keys(item.prices)
      .map((year) => Number(year))
      .sort((a, b) => a - b);
    const baseColor = chartPalette[idx % chartPalette.length];
    const minValue = Math.min(...years.map((year) => item.prices[year]));
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
      baseColor,
      minValue
    };
  });

  const lowest = datasets.reduce((acc, curr) => (acc && acc.minValue <= curr.minValue ? acc : curr), null);
  if (lowest) {
    datasets.forEach((dataset) => {
      dataset.isLowest = dataset === lowest;
      if (dataset.isLowest) {
        dataset.borderWidth = 4;
      }
    });
  }

  if (state.chartInstance) state.chartInstance.destroy();
  const defaultLegendClick = Chart.defaults.plugins.legend.onClick;
  state.chartInstance = new Chart(ctx, {
    type: 'line',
    data: { datasets },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.5,
      parsing: false,
      interaction: { mode: 'nearest', intersect: false },
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
          labels: {
            usePointStyle: true,
            color: (ctx) => {
              const dataset = ctx.chart.data.datasets[ctx.datasetIndex];
              return dataset.isLowest ? '#0B5CFF' : '#1f2933';
            },
            font: (ctx) => {
              const dataset = ctx.chart.data.datasets[ctx.datasetIndex];
              return { size: 12, weight: dataset.isLowest ? '700' : '500' };
            }
          },
          onClick: (evt, legendItem, legend) => {
            defaultLegendClick.call(legend.chart, evt, legendItem, legend);
            const dataset = legend.chart.data.datasets[legendItem.datasetIndex];
            highlightCase(dataset.caseId);
            updateMinPriceTable(state.chartInstance, minTableContainer, true);
          },
          onHover: (evt, legendItem, legend) => {
            if (evt?.native?.target) {
              evt.native.target.style.cursor = 'pointer';
            }
            applyChartFocus(legend.chart, legendItem.datasetIndex);
          },
          onLeave: () => {
            applyChartFocus(state.chartInstance, null);
          }
        },
        tooltip: {
          callbacks: {
            title: () => '',
            label: (ctx) => {
              const dataset = ctx.dataset;
              const item = getCaseById(dataset.caseId);
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
    },
    plugins: [lowestLineGlow]
  });

  applyChartFocus(state.chartInstance, null);
  updateMinPriceTable(state.chartInstance, minTableContainer, true);
}

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
    const baseAlpha = dataset.isLowest ? 1 : isActive ? 1 : 0.3;
    dataset.borderColor = hexToRgba(dataset.baseColor, baseAlpha);
    dataset.backgroundColor = hexToRgba(dataset.baseColor, baseAlpha);
    dataset.borderWidth = dataset.isLowest ? 4 : isActive && focusIndex !== null ? 3 : 2;
  });
  chart.update('none');
}

function updateMinPriceTable(chart, container, shouldDisplay) {
  if (!container) return;
  if (!shouldDisplay || !chart) {
    container.innerHTML = '';
    container.classList.add('hidden');
    container.style.opacity = 1;
    return;
  }

  const allYears = new Set();
  chart.data.datasets.forEach((dataset) => {
    dataset.data.forEach((point) => {
      if (!point) return;
      const yearValue = typeof point.x === 'number' ? point.x : null;
      if (yearValue !== null && yearValue !== undefined) {
        allYears.add(Math.round(yearValue));
      }
    });
  });

  if (!allYears.size) {
    container.innerHTML = '';
    container.classList.add('hidden');
    container.style.opacity = 1;
    return;
  }

  const sortedYears = Array.from(allYears).sort((a, b) => a - b);
  const minValues = {};
  const casesByYear = {};
  sortedYears.forEach((year) => {
    minValues[year] = Infinity;
    casesByYear[year] = new Set();
  });

  chart.data.datasets.forEach((dataset) => {
    if (dataset.hidden) return;
    dataset.data.forEach((point) => {
      if (!point) return;
      const year = typeof point.x === 'number' ? Math.round(point.x) : null;
      if (year === null) return;
      const value = typeof point.y === 'number' ? point.y : null;
      if (value === null || Number.isNaN(value)) return;
      if (value < minValues[year]) {
        minValues[year] = value;
        casesByYear[year] = new Set([dataset.label]);
      } else if (value === minValues[year]) {
        casesByYear[year].add(dataset.label);
      }
    });
  });

  const table = document.createElement('table');
  table.className = 'min-price-table visible';
  const headerRow = document.createElement('tr');
  const headerCell = document.createElement('th');
  headerCell.textContent = 'Year';
  headerRow.appendChild(headerCell);
  sortedYears.forEach((year) => {
    const th = document.createElement('th');
    th.textContent = year;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  const dataRow = document.createElement('tr');
  const labelCell = document.createElement('th');
  labelCell.textContent = 'Min Price (CNY)';
  dataRow.appendChild(labelCell);
  sortedYears.forEach((year) => {
    const value = minValues[year];
    const cell = document.createElement('td');
    if (value === Infinity) {
      cell.textContent = '—';
      cell.className = 'empty';
    } else {
      cell.textContent = Math.round(value);
      const contributing = Array.from(casesByYear[year]);
      if (contributing.length) {
        cell.title = `Year ${year}: Min ${Math.round(value)} CNY\nCases:\n${contributing.join('\n')}`;
      }
    }
    dataRow.appendChild(cell);
  });
  table.appendChild(dataRow);

  container.innerHTML = '';
  container.appendChild(table);
  container.classList.remove('hidden');
  container.style.opacity = 0;
  requestAnimationFrame(() => {
    container.style.opacity = 1;
  });
}

function renderStep3(cases) {
  step3.innerHTML = `
    <div class="section-title">
      <h2>Step 3 · Case Details</h2>
      <span class="mode-hint">Review the selected leads.</span>
    </div>
  `;
  const panel = document.createElement('div');
  panel.className = 'details-panel';
  const container = document.createElement('div');
  container.className = 'detail-cards';

  if (!cases.length) {
    const empty = document.createElement('div');
    empty.className = 'mode-hint';
    empty.textContent = 'Adjust filters or load a new message to see case details.';
    panel.appendChild(empty);
    step3.appendChild(panel);
    return;
  }

  cases.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.dataset.caseId = item.id;
    card.id = `card-${item.id}`;
    card.innerHTML = `
      <div class="card-header">
        <h3>${formatCurrency(item.sopPrice)}</h3>
        <h4>${item.client} – ${item.project} – ${item.product} | SOP ${item.sopYear}</h4>
      </div>
      <div class="card-section">
        <h5>1. Project Info</h5>
        <p><strong>Client:</strong> ${item.client}</p>
        <p><strong>Project:</strong> ${item.project}</p>
        <p><strong>Product:</strong> ${item.product}</p>
        <p><strong>Competitor:</strong> ${item.competitor}</p>
        <p><strong>Tech:</strong> ${item.tech.join(', ')}</p>
        <p><strong>SOP Year:</strong> ${item.sopYear}</p>
        <p><strong>Lead Month:</strong> ${item.leadMonth}</p>
        <p><strong>Submitter:</strong> ${item.submitter}</p>
        <p><strong>Volume:</strong> ${item.volume?.toLocaleString?.() || '—'} units</p>
      </div>
      <div class="card-section price-info ${state.priceInfoCollapsed.has(item.id) ? 'collapsed' : 'expanded'}" data-price="${item.id}">
        <button class="collapse-toggle" data-price-toggle>
          <span>2. Price Info</span>
          <span>${state.priceInfoCollapsed.has(item.id) ? '▸' : '▾'}</span>
        </button>
        <div class="price-info-body">
          ${Object.keys(item.prices)
            .map((year) => `<p><strong>${year}:</strong> ${formatCurrency(item.prices[year])}</p>`)
            .join('')}
          <p><strong>PCR Rate:</strong> ${item.pcrRate ? `${item.pcrRate}%` : '—'}</p>
          <p><strong>PCR Years:</strong> ${item.pcrYears ?? '—'}</p>
        </div>
      </div>
      <div class="card-section">
        <details>
          <summary>3. Background Info</summary>
          <p><strong>Remarks:</strong> ${item.remarks || '—'}</p>
          <p><strong>Source Type:</strong> ${item.source || '—'}</p>
          <p><strong>Special Terms:</strong> ${item.terms || 'None'}</p>
          <p><strong>Attachments:</strong> ${item.attachments.length ? item.attachments.join(', ') : 'None'}</p>
        </details>
      </div>
      <div class="card-actions">
        <button type="button" class="edit-case" data-edit="${item.id}">✏️ Edit</button>
      </div>
    `;
    const priceSection = card.querySelector('.price-info');
    const body = priceSection.querySelector('.price-info-body');
    requestAnimationFrame(() => {
      body.style.maxHeight = priceSection.classList.contains('collapsed') ? '0px' : `${body.scrollHeight}px`;
      body.style.opacity = priceSection.classList.contains('collapsed') ? '0' : '1';
    });
    priceSection.querySelector('[data-price-toggle]').addEventListener('click', () => {
      const willCollapse = !priceSection.classList.contains('collapsed');
      priceSection.classList.toggle('collapsed', willCollapse);
      priceSection.classList.toggle('expanded', !willCollapse);
      priceSection.querySelector('[data-price-toggle] span:last-child').textContent = willCollapse ? '▸' : '▾';
      if (willCollapse) {
        state.priceInfoCollapsed.add(item.id);
        body.style.maxHeight = '0px';
        body.style.opacity = '0';
      } else {
        state.priceInfoCollapsed.delete(item.id);
        body.style.maxHeight = `${body.scrollHeight}px`;
        body.style.opacity = '1';
      }
    });
    card.querySelector('[data-edit]').addEventListener('click', () => {
      openEditModal(item.id);
    });
    container.appendChild(card);
  });
  panel.appendChild(container);
  step3.appendChild(panel);
}

function highlightCase(caseId) {
  const card = document.getElementById(`card-${caseId}`);
  if (!card) return;
  card.classList.add('highlighted', 'glow');
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => card.classList.remove('glow'), 1000);
  setTimeout(() => card.classList.remove('highlighted'), 1200);
}

// -----------------------------
// Messages panel
// -----------------------------
const messagesBtn = document.getElementById('messagesBtn');
const messagesPanel = document.getElementById('messagesPanel');
const messagesList = document.getElementById('messagesList');
const markAllBtn = document.getElementById('markAllRead');

function renderMessagesPanel() {
  if (!messagesPanel) return;
  messagesList.innerHTML = '';
  const sorted = messageFeed
    .slice()
    .sort((a, b) => {
      if (state.messageSort === 'date') {
        return a.received < b.received ? 1 : -1;
      }
      const caseA = getCaseById(a.caseId);
      const caseB = getCaseById(b.caseId);
      const valueA = caseA ? getMinPrice(caseA) : Infinity;
      const valueB = caseB ? getMinPrice(caseB) : Infinity;
      if (valueA === valueB) {
        return a.received < b.received ? 1 : -1;
      }
      return valueA - valueB;
    });

  sorted.forEach((msg) => {
    const caseData = getCaseById(msg.caseId);
    if (!caseData) return;
    const card = document.createElement('div');
    card.className = 'messages-card';
    if (!msg.read) {
      card.classList.add('flash');
      setTimeout(() => card.classList.remove('flash'), 300);
    }
    const title = `${caseData.sopPrice} – ${caseData.competitor} – ${caseData.product} – ${caseData.client} – ${caseData.project} – SOP ${caseData.sopYear}`;
    card.innerHTML = `
      <h4>${title}</h4>
      <span>Line received: ${msg.received}</span>
      <span class="message-status ${statusClassMap[msg.status] || 'status-normal'}">${msg.status}</span>
    `;
    card.addEventListener('click', () => {
      applyMessageCase(msg);
    });
    messagesList.appendChild(card);
  });

  messagesPanel.querySelectorAll('.messages-sort button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.sort === state.messageSort);
  });
}

function openMessagesPanel() {
  if (!messagesPanel) return;
  renderMessagesPanel();
  messagesPanel.classList.remove('hidden');
  requestAnimationFrame(() => {
    messagesPanel.classList.add('open');
  });
  messagesBtn.setAttribute('aria-expanded', 'true');
  state.messagesOpen = true;
}

function closeMessagesPanel() {
  if (!messagesPanel || messagesPanel.classList.contains('hidden')) return;
  messagesPanel.classList.remove('open');
  messagesBtn.setAttribute('aria-expanded', 'false');
  state.messagesOpen = false;
  setTimeout(() => {
    messagesPanel.classList.add('hidden');
  }, 200);
}

function applyMessageCase(message) {
  const caseData = getCaseById(message.caseId);
  if (!caseData) return;
  message.read = true;
  state.unreadMessages = messageFeed.filter((m) => !m.read).length;
  state.filters = {
    time: state.filters.time,
    product: caseData.product,
    competitors: [caseData.competitor],
    tech: [...caseData.tech],
    sopYear: caseData.sopYear,
    more: { customer: null, volume: null, terms: null }
  };
  state.chartSort = 'recent';
  state.pendingHighlight = caseData.id;
  showToast('🔍 Filter updated by selected case');
  closeMessagesPanel();
  renderApp();
}

messagesBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  if (state.messagesOpen) {
    closeMessagesPanel();
  } else {
    openMessagesPanel();
  }
});

if (markAllBtn) {
  markAllBtn.addEventListener('click', () => {
    messageFeed.forEach((msg) => {
      msg.read = true;
    });
    state.unreadMessages = 0;
    renderMessagesPanel();
    updateMessagesBadge();
  });
}

if (messagesPanel) {
  messagesPanel.addEventListener('click', (e) => e.stopPropagation());
  messagesPanel.querySelectorAll('.messages-sort button').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.messageSort = btn.dataset.sort;
      renderMessagesPanel();
    });
  });
}

document.addEventListener('click', () => {
  if (state.messagesOpen) {
    closeMessagesPanel();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (state.messagesOpen) closeMessagesPanel();
    if (!newLeadModal.classList.contains('hidden')) closeLeadModal();
    if (!confirmModal.classList.contains('hidden')) closeConfirm();
  }
});
// -----------------------------
// Modal logic & toasts
// -----------------------------
const newLeadBtn = document.getElementById('newLeadBtn');
const newLeadModal = document.getElementById('newLeadModal');
const leadModalTitle = newLeadModal.querySelector('.modal-header h3');
const leadForm = document.getElementById('leadForm');
const toast = document.getElementById('toast');
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

confirmCancelBtn.addEventListener('click', () => closeConfirm());
confirmOkBtn.addEventListener('click', () => {
  const callback = confirmState?.onConfirm;
  closeConfirm();
  if (callback) callback();
});

confirmModal.addEventListener('click', (e) => {
  if (e.target === confirmModal) closeConfirm();
});

function getContextDefaults() {
  return {
    product: state.filters.product,
    competitor: state.filters.competitors.join(', '),
    tech: state.filters.tech.join(', ')
  };
}

function openLeadModalForCreate() {
  state.leadModalMode = 'create';
  state.editingCaseId = null;
  leadModalTitle.textContent = 'New Price Lead';
  document.body.classList.remove('editing-case-active');
  const context = getContextDefaults();
  document.getElementById('leadProduct').value = context.product || '';
  document.getElementById('leadCompetitor').value = context.competitor || '';
  document.getElementById('leadTech').value = context.tech || '';
  document.getElementById('leadCustomer').value = '';
  document.getElementById('leadProject').value = '';
  document.getElementById('leadVolume').value = '';
  document.getElementById('leadSop').value = state.filters.sopYear || '';
  document.getElementById('leadPrice').value = '';
  document.getElementById('leadPcrRate').value = '';
  document.getElementById('leadPcrYears').value = '';
  document.getElementById('leadCompProduct').value = '';
  document.getElementById('leadTerms').value = '';
  newLeadModal.classList.remove('hidden');
}

function openEditModal(caseId) {
  const item = getCaseById(caseId);
  if (!item) return;
  state.leadModalMode = 'edit';
  state.editingCaseId = caseId;
  leadModalTitle.textContent = 'Edit Case';
  document.body.classList.add('editing-case-active');
  document.getElementById('leadProduct').value = item.product;
  document.getElementById('leadCompetitor').value = item.competitor;
  document.getElementById('leadTech').value = item.tech.join(', ');
  document.getElementById('leadCustomer').value = item.client;
  document.getElementById('leadProject').value = item.project;
  document.getElementById('leadVolume').value = item.volume || '';
  document.getElementById('leadSop').value = item.sopYear;
  document.getElementById('leadPrice').value = item.sopPrice;
  document.getElementById('leadPcrRate').value = item.pcrRate ?? '';
  document.getElementById('leadPcrYears').value = item.pcrYears ?? '';
  document.getElementById('leadCompProduct').value = item.competitorProduct || '';
  document.getElementById('leadTerms').value = item.terms || '';
  newLeadModal.classList.remove('hidden');
}

function closeLeadModal() {
  newLeadModal.classList.add('hidden');
  leadForm.reset();
  state.leadModalMode = 'create';
  state.editingCaseId = null;
  document.body.classList.remove('editing-case-active');
}

if (newLeadBtn) {
  newLeadBtn.addEventListener('click', () => {
    openLeadModalForCreate();
  });
}

if (newLeadModal) {
  newLeadModal.addEventListener('click', (e) => {
    if (e.target.dataset.close !== undefined || e.target === newLeadModal) {
      closeLeadModal();
    }
  });
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

leadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const product = document.getElementById('leadProduct').value || state.filters.product;
  const competitorsText = document.getElementById('leadCompetitor').value || state.filters.competitors.join(', ');
  const techText = document.getElementById('leadTech').value || state.filters.tech.join(', ');
  const techArray = techText ? techText.split(',').map((v) => v.trim()).filter(Boolean) : [];
  const competitorArray = competitorsText ? competitorsText.split(',').map((v) => v.trim()).filter(Boolean) : [];
  const formData = {
    client: document.getElementById('leadCustomer').value,
    project: document.getElementById('leadProject').value,
    volume: Number(document.getElementById('leadVolume').value) || null,
    sopYear: Number(document.getElementById('leadSop').value),
    sopPrice: Number(document.getElementById('leadPrice').value),
    pcrRate: document.getElementById('leadPcrRate').value ? Number(document.getElementById('leadPcrRate').value) : null,
    pcrYears: document.getElementById('leadPcrYears').value ? Number(document.getElementById('leadPcrYears').value) : null,
    competitorProduct: document.getElementById('leadCompProduct').value || null,
    terms: document.getElementById('leadTerms').value || null
  };

  if (state.leadModalMode === 'edit' && state.editingCaseId) {
    const existing = getCaseById(state.editingCaseId);
    if (existing) {
      existing.client = formData.client;
      existing.project = formData.project;
      existing.volume = formData.volume;
      existing.sopYear = formData.sopYear;
      existing.sopPrice = formData.sopPrice;
      existing.pcrRate = formData.pcrRate;
      existing.pcrYears = formData.pcrYears;
      existing.terms = formData.terms;
      existing.competitorProduct = formData.competitorProduct;
      existing.tech = techArray.length ? techArray : existing.tech;
      existing.competitor = competitorArray[0] || existing.competitor;
      existing.product = product;
      const priceSpan = Object.keys(existing.prices).length || 5;
      const newPrices = {};
      for (let i = 0; i < priceSpan; i++) {
        newPrices[formData.sopYear + i] = Math.max(formData.sopPrice - i * 20, 0);
      }
      existing.prices = newPrices;
    }
    closeLeadModal();
    showToast('✅ Case updated successfully');
    renderApp();
    return;
  }

  const leadMonthValue = getLatestLeadMonth();
  const newCase = {
    id: `C${Math.floor(1000 + Math.random() * 9000)}`,
    client: formData.client,
    project: formData.project,
    product,
    competitor: competitorArray[0] || state.filters.competitors[0] || 'Conti',
    tech: techArray.length ? techArray : [...state.filters.tech],
    sopYear: formData.sopYear,
    sopPrice: formData.sopPrice,
    prices: {},
    pcrRate: formData.pcrRate,
    pcrYears: formData.pcrYears,
    leadMonth: leadMonthValue,
    tier: 'L1',
    source: 'User Submitted',
    remarks: formData.terms ? `Terms: ${formData.terms}` : 'User supplied lead.',
    terms: formData.terms,
    attachments: [],
    submitter: 'You',
    leadDate: `${leadMonthValue}-20`,
    volume: formData.volume,
    competitorProduct: formData.competitorProduct
  };
  for (let i = 0; i < 5; i++) {
    newCase.prices[formData.sopYear + i] = Math.max(formData.sopPrice - i * 20, 0);
  }
  caseDataset.unshift(newCase);
  closeLeadModal();
  showToast('✅ New price lead added');
  renderApp();
});

renderApp();
