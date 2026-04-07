// 国际化支持
const i18n = {
  zh: {
    record: '记录',
    analysis: '分析',
    data: '数据',
    settings: '设置',
    save: '保存',
    cancel: '取消',
    delete: '删除',
    edit: '编辑',
    add: '添加',
    confirm: '确认',
    records: '历史记录',
    no_records: '暂无记录',
    delete_confirm: '确定删除这条记录？',
    record_saved: '记录已保存',
    record_deleted: '记录已删除',
    language: '语言',
    chinese: '中文',
    english: 'English',
    theme: '主题',
    light_mode: '浅色模式',
    dark_mode: '深色模式',
    activities: '活动',
    locations: '地点',
    foods: '饮食',
    mood: '心情',
    notes: '备注',
    date: '日期',
    time: '时间',
    duration: '时长',
    export_data: '导出数据',
    import_data: '导入数据',
    export_success: '数据导出成功！',
    import_success: '数据导入成功！',
    import_confirm: '导入将覆盖现有数据，确定继续吗？',
    invalid_file: '无效的数据文件',
    total_records: '总记录数',
    avg_mood: '平均心情',
    most_frequent_activity: '最常活动',
    most_frequent_location: '最常地点',
    activity_distribution: '活动分布',
    location_distribution: '地点分布',
    food_distribution: '饮食分布',
    mood_trend: '心情趋势',
    week: '周',
    month: '月',
    year: '年',
    custom: '自定义',
    start_date: '开始日期',
    end_date: '结束日期',
    apply: '应用',
    reset: '重置',
    activity_name: '活动名称',
    location_name: '地点名称',
    food_category: '饮食分类',
    food_name: '食物名称',
    add_activity: '添加活动',
    add_location: '添加地点',
    add_food_category: '添加饮食分类',
    add_food: '添加食物',
    activity_saved: '活动已保存',
    location_saved: '地点已保存',
    food_saved: '食物已保存',
    activity_deleted: '活动已删除',
    location_deleted: '地点已删除',
    food_deleted: '食物已删除',
    delete_activity_confirm: '确定删除这个活动？',
    delete_location_confirm: '确定删除这个地点？',
    delete_food_confirm: '确定删除这个食物？',
    about: '关于',
    version: '版本',
    version_number: 'v1.0.0',
    developer: '开发者',
    app_description: '口己是一款用于记录和分析个人日常活动的开源应用。',
    tip: '提示',
    please_select_activity: '请至少选择一个活动',
    success: '成功',
    diary_saved: '日记已保存',
    error: '错误',
    save_failed: '保存失败，请重试',
    select: '选择',
    add_food: '添加',
    random_food: '是啊，吃什么',
    existing_foods: '已添加的食物',
    back: '返回',
    confirm: '确定',
    no_foods_selected: '未选择食物'
  },
  en: {
    record: 'Record',
    analysis: 'Analysis',
    data: 'Data',
    settings: 'Settings',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    confirm: 'Confirm',
    records: 'Records',
    no_records: 'No records yet',
    delete_confirm: 'Delete this record?',
    record_saved: 'Record saved',
    record_deleted: 'Record deleted',
    language: 'Language',
    chinese: '中文',
    english: 'English',
    theme: 'Theme',
    light_mode: 'Light Mode',
    dark_mode: 'Dark Mode',
    activities: 'Activities',
    locations: 'Locations',
    foods: 'Foods',
    mood: 'Mood',
    notes: 'Notes',
    date: 'Date',
    time: 'Time',
    duration: 'Duration',
    export_data: 'Export Data',
    import_data: 'Import Data',
    export_success: 'Data exported successfully!',
    import_success: 'Data imported successfully!',
    import_confirm: 'Import will overwrite existing data. Continue?',
    invalid_file: 'Invalid data file',
    total_records: 'Total Records',
    avg_mood: 'Average Mood',
    most_frequent_activity: 'Most Frequent Activity',
    most_frequent_location: 'Most Frequent Location',
    activity_distribution: 'Activity Distribution',
    location_distribution: 'Location Distribution',
    food_distribution: 'Food Distribution',
    mood_trend: 'Mood Trend',
    week: 'Week',
    month: 'Month',
    year: 'Year',
    custom: 'Custom',
    start_date: 'Start Date',
    end_date: 'End Date',
    apply: 'Apply',
    reset: 'Reset',
    activity_name: 'Activity Name',
    location_name: 'Location Name',
    food_category: 'Food Category',
    food_name: 'Food Name',
    add_activity: 'Add Activity',
    add_location: 'Add Location',
    add_food_category: 'Add Food Category',
    add_food: 'Add Food',
    activity_saved: 'Activity saved',
    location_saved: 'Location saved',
    food_saved: 'Food saved',
    activity_deleted: 'Activity deleted',
    location_deleted: 'Location deleted',
    food_deleted: 'Food deleted',
    delete_activity_confirm: 'Delete this activity?',
    delete_location_confirm: 'Delete this location?',
    delete_food_confirm: 'Delete this food?',
    about: 'About',
    version: 'Version',
    version_number: 'v1.0.0',
    developer: 'Developer',
    app_description: 'Kouji is an open-source app for tracking and analyzing personal daily activities.',
    tip: 'Tip',
    please_select_activity: 'Please select at least one activity',
    success: 'Success',
    diary_saved: 'Diary has been saved',
    error: 'Error',
    save_failed: 'Save failed, please try again',
    select: 'Select',
    add_food: 'Add',
    random_food: 'Random Food',
    existing_foods: 'Existing Foods',
    back: 'Back',
    confirm: 'Confirm',
    no_foods_selected: 'No foods selected'
  }
};

// 数据初始化
function init() {
  const storage = {};
  try {
    storage.lang = localStorage.getItem('lang') || 'zh';
    storage.theme = localStorage.getItem('theme') || 'light';
    storage.diaryEntries = JSON.parse(localStorage.getItem('diaryEntries') || '[]');
    storage.activities = JSON.parse(localStorage.getItem('activities') || '[]');
    storage.locations = JSON.parse(localStorage.getItem('locations') || '[]');
    storage.foodCategories = JSON.parse(localStorage.getItem('foodCategories') || '[]');
    storage.foods = JSON.parse(localStorage.getItem('foods') || '[]');
    storage.settings = JSON.parse(localStorage.getItem('settings') || '{}');
  } catch (e) {
    storage.lang = 'zh';
    storage.theme = 'light';
    storage.diaryEntries = [];
    storage.activities = [];
    storage.locations = [];
    storage.foodCategories = [];
    storage.foods = [];
    storage.settings = {};
  }

  // 初始化默认数据
  if (storage.activities.length === 0) {
    storage.activities = [
      { id: 1, name: '学习', color: '#6366f1' },
      { id: 2, name: '工作', color: '#10b981' },
      { id: 3, name: '娱乐', color: '#f97316' },
      { id: 4, name: '运动', color: '#ec4899' },
      { id: 5, name: '社交', color: '#8b5cf6' }
    ];
    localStorage.setItem('activities', JSON.stringify(storage.activities));
  }

  if (storage.locations.length === 0) {
    storage.locations = [
      { id: 1, name: '家', color: '#6366f1' },
      { id: 2, name: '办公室', color: '#10b981' },
      { id: 3, name: '学校', color: '#f97316' },
      { id: 4, name: '户外', color: '#ec4899' }
    ];
    localStorage.setItem('locations', JSON.stringify(storage.locations));
  }

  if (storage.foodCategories.length === 0) {
    storage.foodCategories = [
      { id: 1, name: '早餐', color: '#6366f1' },
      { id: 2, name: '午餐', color: '#10b981' },
      { id: 3, name: '晚餐', color: '#f97316' },
      { id: 4, name: '零食', color: '#ec4899' }
    ];
    localStorage.setItem('foodCategories', JSON.stringify(storage.foodCategories));
  }

  if (storage.foods.length === 0) {
    storage.foods = [
      { id: 1, name: '米饭', categoryId: 1 },
      { id: 2, name: '面条', categoryId: 1 },
      { id: 3, name: '面包', categoryId: 1 },
      { id: 4, name: '炒菜', categoryId: 2 },
      { id: 5, name: '外卖', categoryId: 2 },
      { id: 6, name: '火锅', categoryId: 3 },
      { id: 7, name: '烧烤', categoryId: 3 },
      { id: 8, name: '水果', categoryId: 4 },
      { id: 9, name: '薯片', categoryId: 4 },
      { id: 10, name: '饮料', categoryId: 4 }
    ];
    localStorage.setItem('foods', JSON.stringify(storage.foods));
  }

  if (Object.keys(storage.settings).length === 0) {
    storage.settings = {
      language: 'zh',
      theme: 'light'
    };
    localStorage.setItem('settings', JSON.stringify(storage.settings));
  }

  return storage;
}

// 全局变量
let currentLang = 'zh';
let currentTheme = 'light';
let diaryEntries = [];
let activities = [];
let locations = [];
let foodCategories = [];
let foods = [];
let settings = {};

let currentTab = 'record';
let editingEntryId = null;

// 食物选择相关变量
let showFoodModal = false;
let currentFoodCategory = null;
let selectedFoods = [];
let foodInput = '';
let showEditPage = false;

// 日历相关变量
let markedDates = {};

// 设置页面相关变量
let settingsSubPage = null;

// DOM 元素
const mainContent = document.getElementById('main-content');
const bottomNav = document.getElementById('bottom-nav');

// 工具函数
function t(key) {
  return i18n[currentLang][key] || key;
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

function formatDate(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
}

function formatDateTime(date) {
  const d = new Date(date);
  return `${formatDate(date)} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
}

// 通用保存函数
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function saveDiaryEntries() {
  saveData('diaryEntries', diaryEntries);
}

function saveActivities() {
  saveData('activities', activities);
}

function saveLocations() {
  saveData('locations', locations);
}

function saveFoodCategories() {
  saveData('foodCategories', foodCategories);
}

function saveFoods() {
  saveData('foods', foods);
}

function saveSettings() {
  saveData('settings', settings);
  localStorage.setItem('lang', currentLang);
  localStorage.setItem('theme', currentTheme);
}

function applyTheme() {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(currentTheme + '-theme');
  document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
}

function updateNavigationLabels() {
  document.querySelectorAll('.nav-label').forEach((el, index) => {
    const tabs = ['record', 'analysis', 'data', 'settings'];
    el.textContent = t(tabs[index]);
  });
}

// 导航初始化
function initNavigation() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      currentTab = tab;
      // 重置设置子页面，确保跳转到首页
      settingsSubPage = null;
      // 重置编辑页面状态
      showEditPage = false;
      // 重置食物模态框状态
      showFoodModal = false;
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCurrentTab();
    });
  });
}

// 渲染当前标签页
function renderCurrentTab() {
  // 清除模态框
  const existingModal = document.getElementById('food-modal');
  if (existingModal) {
    existingModal.remove();
  }

  if (showFoodModal) {
    renderFoodModal();
  } else if (showEditPage) {
    // 隐藏导航栏
    document.getElementById('bottom-nav').style.display = 'none';
    renderEditPage();
  } else {
    // 显示导航栏
    document.getElementById('bottom-nav').style.display = 'flex';
    switch (currentTab) {
      case 'record':
        renderRecordTab();
        break;
      case 'analysis':
        renderAnalysisTab();
        break;
      case 'data':
        renderDataTab();
        break;
      case 'settings':
        renderSettingsTab();
        break;
    }
  }
}

// 渲染编辑页面
function renderEditPage() {
  const entry = editingEntryId ? diaryEntries.find(e => e.id === editingEntryId) : null;
  if (!entry) return;
  
  const today = new Date().toISOString().slice(0, 16);
  const selectedActivities = entry.activities || [];
  const selectedLocations = Array.isArray(entry.locations) ? entry.locations : (entry.location ? [entry.location] : []);
  const recordSelectedFoods = window.foodSelections || entry.foods || {};
  const selectedMood = entry.mood || 3;
  const notes = entry.notes || '';

  let activityOptions = activities.map(activity => `
    <div class="tag ${selectedActivities.includes(activity.id) ? 'selected' : ''}" data-id="${activity.id}">
      ${activity.name}
    </div>
  `).join('');

  let locationOptions = locations.map(location => `
    <div class="tag ${selectedLocations.includes(location.id) ? 'selected' : ''}" data-id="${location.id}">
      ${location.name}
    </div>
  `).join('');

  let foodOptions = foodCategories.map(category => `
    <div class="tag" data-id="${category.id}">
      ${category.name}
    </div>
  `).join('');

  let foodDisplay = '';
  Object.entries(recordSelectedFoods).forEach(([categoryId, foodNames]) => {
    const category = foodCategories.find(c => c.id == categoryId);
    if (category && foodNames) {
      foodDisplay += `<p><strong>${category.name}:</strong> ${foodNames}</p>`;
    }
  });

  mainContent.innerHTML = `
    <div class="edit-page">
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h2>编辑记录</h2>
          <button class="btn btn-secondary" id="cancel-edit">${t('back')}</button>
        </div>
        <div class="form-group">
          <label class="form-label">${t('date')}</label>
          <input type="date" class="form-input" id="record-date" value="${entry.date.slice(0, 10)}">
        </div>
        <div class="form-group">
          <label class="form-label">${t('activities')}</label>
          <div class="tags-container" id="activity-tags">
            ${activityOptions}
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">${t('locations')}</label>
          <div class="tags-container" id="location-tags">
            ${locationOptions}
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">${t('foods')}</label>
          <div class="tags-container" id="food-tags">
            ${foodOptions}
          </div>
          <div id="food-display" style="margin-top: 12px; word-break: break-word;">
            ${foodDisplay || `<p>${t('no_foods_selected')}</p>`}
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">${t('mood')}</label>
          <div class="mood-rating">
            <div class="mood-button ${selectedMood === 1 ? 'selected' : ''}" data-value="1">
              <div class="mood-emoji">😢</div>
              <div class="mood-text">很差</div>
            </div>
            <div class="mood-button ${selectedMood === 2 ? 'selected' : ''}" data-value="2">
              <div class="mood-emoji">😔</div>
              <div class="mood-text">较差</div>
            </div>
            <div class="mood-button ${selectedMood === 3 ? 'selected' : ''}" data-value="3">
              <div class="mood-emoji">😐</div>
              <div class="mood-text">一般</div>
            </div>
            <div class="mood-button ${selectedMood === 4 ? 'selected' : ''}" data-value="4">
              <div class="mood-emoji">😊</div>
              <div class="mood-text">较好</div>
            </div>
            <div class="mood-button ${selectedMood === 5 ? 'selected' : ''}" data-value="5">
              <div class="mood-emoji">😄</div>
              <div class="mood-text">很好</div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">${t('notes')}</label>
          <textarea class="form-input" id="record-notes" rows="3">${notes}</textarea>
        </div>
        <button class="btn btn-primary" id="save-record">${t('save')}</button>
      </div>
    </div>
  `;

  // 绑定事件
  document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const tagId = parseInt(tag.dataset.id);
      const tagType = tag.closest('#activity-tags') ? 'activity' : 
                    tag.closest('#location-tags') ? 'location' : 
                    tag.closest('#food-tags') ? 'food' : '';
      
      if (tagType === 'activity') {
        tag.classList.toggle('selected');
      } else if (tagType === 'location') {
        tag.classList.toggle('selected');
      } else if (tagType === 'food') {
        currentFoodCategory = tagId;
        foodInput = '';
        selectedFoods = [];
        showFoodModal = true;
        renderCurrentTab();
      }
    });
  });

  document.querySelectorAll('.mood-button').forEach(button => {
    button.addEventListener('click', () => {
      const value = parseInt(button.dataset.value);
      document.querySelectorAll('.mood-button').forEach(btn => {
        btn.classList.remove('selected');
      });
      button.classList.add('selected');
    });
  });

  const saveButton = document.getElementById('save-record');
  if (saveButton) {
    saveButton.addEventListener('click', () => {
      const date = document.getElementById('record-date').value;
      const selectedActivities = Array.from(document.querySelectorAll('#activity-tags .tag.selected')).map(tag => parseInt(tag.dataset.id));
      const selectedLocations = Array.from(document.querySelectorAll('#location-tags .tag.selected')).map(tag => parseInt(tag.dataset.id));
      const locations = selectedLocations.length > 0 ? selectedLocations : null;
      const notes = document.getElementById('record-notes').value;
      const selectedMood = Array.from(document.querySelectorAll('.mood-button.selected'))[0];
      const mood = selectedMood ? parseInt(selectedMood.dataset.value) : 3;

      // 收集食物选择
      const foods = window.foodSelections || entry.foods;

      if (selectedActivities.length === 0) {
        showToast(`${t('tip')}: ${t('please_select_activity')}`);
        return;
      }

      // 设置时间为中午12点，确保日期一致性
      const currentDate = new Date(date);
      currentDate.setHours(12, 0, 0, 0);

      const updatedEntry = {
        id: editingEntryId,
        date: currentDate.toISOString(),
        activities: selectedActivities,
        locations: locations,
        foods: foods,
        mood: mood,
        notes: notes
      };

      const index = diaryEntries.findIndex(e => e.id === editingEntryId);
      if (index !== -1) {
        diaryEntries[index] = updatedEntry;

        saveDiaryEntries();
        editingEntryId = null;
        window.foodSelections = {};
        showEditPage = false;
        showToast(t('record_saved'));
        currentTab = 'data';
        renderCurrentTab();
      } else {
        showToast('错误：找不到要编辑的记录');
      }
    });
  }

  const cancelButton = document.getElementById('cancel-edit');
  if (cancelButton) {
    cancelButton.addEventListener('click', () => {
      editingEntryId = null;
      showEditPage = false;
      currentTab = 'data';
      renderCurrentTab();
    });
  }
}

// 渲染记录页面
function renderRecordTab() {
  const entry = editingEntryId ? diaryEntries.find(e => e.id === editingEntryId) : null;
  const today = new Date().toISOString().slice(0, 16);
  // 优先使用当前会话中的活动和地点选择，如果没有则使用编辑记录中的选择
  const selectedActivities = window.activitySelections || (entry ? entry.activities : []);
  const selectedLocations = window.locationSelection || (entry ? (Array.isArray(entry.locations) ? entry.locations : (entry.location ? [entry.location] : [])) : []);
  // 优先使用当前会话中的食物选择，如果没有则使用编辑记录中的食物选择
  const recordSelectedFoods = window.foodSelections || (entry ? entry.foods : {});
  const selectedMood = entry ? entry.mood : 3;
  const notes = entry ? entry.notes : '';
  // 优先使用当前会话中的日期选择，如果没有则使用编辑记录中的日期，否则使用当天日期
  const currentDate = window.recordDate || (entry ? entry.date.slice(0, 10) : new Date().toISOString().slice(0, 10));

  let activityOptions = activities.map(activity => `
    <div class="tag ${selectedActivities.includes(activity.id) ? 'selected' : ''}" data-id="${activity.id}">
      ${activity.name}
    </div>
  `).join('');

  let locationOptions = locations.map(location => `
    <div class="tag ${selectedLocations.includes(location.id) ? 'selected' : ''}" data-id="${location.id}">
      ${location.name}
    </div>
  `).join('');

  let foodOptions = foodCategories.map(category => {
    return `
      <div class="tag ${recordSelectedFoods[category.id] ? 'selected' : ''}" data-id="${category.id}">
        ${category.name}
      </div>
    `;
  }).join('');

  let moodEmojis = ['😢', '😔', '😐', '😊', '😄'];
  let moodOptions = moodEmojis.map((emoji, index) => {
    const moodValue = index + 1;
    return `
      <div class="mood-button ${moodValue === selectedMood ? 'selected' : ''}" data-value="${moodValue}">
        <span class="mood-emoji">${emoji}</span>
        <span class="mood-text">${moodValue}</span>
      </div>
    `;
  }).join('');

  mainContent.innerHTML = `
    <div class="card">
      <h2>${t('record')}</h2>
      <div class="form-group">
        <label class="form-label">${t('date')}</label>
        <input type="date" class="form-input" id="record-date" value="${currentDate}">
      </div>
      <div class="form-group">
        <label class="form-label">${t('activities')}</label>
        <div class="activity-tags" id="activity-tags">
          ${activityOptions}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${t('locations')}</label>
        <div class="activity-tags" id="location-tags">
          ${locationOptions}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${t('foods')}</label>
        <div class="activity-tags" id="food-tags">
          ${foodOptions}
        </div>
        <div class="food-container" id="food-container">
          ${Object.entries(recordSelectedFoods).map(([categoryId, foodName]) => {
            if (foodName) {
              const category = foodCategories.find(c => c.id == categoryId);
              if (category) {
                return `
                  <div class="food-category-item">
                    <div class="food-category-indicator" style="background-color: ${category.color}"></div>
                    <div class="food-category-name">${category.name}: ${foodName}</div>
                  </div>
                `;
              }
            }
            return '';
          }).join('')}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${t('mood')}</label>
        <div class="mood-rating" id="mood-rating">
          ${moodOptions}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${t('notes')}</label>
        <textarea class="form-input notes-input" id="record-notes" placeholder="${t('notes')}">${notes}</textarea>
      </div>
      <button class="btn btn-primary" id="save-record">${t('save')}</button>
    </div>
  `;

  // 绑定事件
  document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const tagId = parseInt(tag.dataset.id);
      const tagType = tag.closest('#activity-tags') ? 'activity' : 
                    tag.closest('#location-tags') ? 'location' : 'food';
      
      if (tagType === 'activity') {
        tag.classList.toggle('selected');
        // 保存活动选择
        window.activitySelections = Array.from(document.querySelectorAll('#activity-tags .tag.selected')).map(t => parseInt(t.dataset.id));
      } else if (tagType === 'location') {
        tag.classList.toggle('selected');
        // 保存地点选择
        window.locationSelection = Array.from(document.querySelectorAll('#location-tags .tag.selected')).map(t => parseInt(t.dataset.id));
      } else if (tagType === 'food') {
        currentFoodCategory = tagId;
        foodInput = '';
        selectedFoods = [];
        showFoodModal = true;
        renderCurrentTab();
      }
    });
  });

  document.querySelectorAll('.mood-button').forEach(button => {
    button.addEventListener('click', () => {
      const value = parseInt(button.dataset.value);
      document.querySelectorAll('.mood-button').forEach(btn => {
        btn.classList.remove('selected');
      });
      button.classList.add('selected');
    });
  });

  // 绑定日期输入框的change事件
  const dateInput = document.getElementById('record-date');
  if (dateInput) {
    dateInput.addEventListener('change', (e) => {
      window.recordDate = e.target.value;
    });
  }

  document.getElementById('save-record').addEventListener('click', handleSaveRecord);
}

// 渲染食物选择模态框
function renderFoodModal() {
  const currentCategory = foodCategories.find(c => c.id === currentFoodCategory);
  const categoryFoods = foods.filter(item => item.categoryId === currentFoodCategory);

  const modalHTML = `
    <div class="modal" id="food-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">${t('select')} ${currentCategory ? currentCategory.name : 'Food'}</h3>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <input type="text" class="form-input" id="food-input" placeholder="${t('add_food')}" value="${foodInput}">
          </div>
          <div class="modal-button-row">
            <button class="modal-save-button" style="margin-right: 8px" id="add-food-btn">${t('add_food')}</button>
            <button class="modal-save-button" style="margin-left: 8px" id="random-food-btn">${t('random_food')}</button>
          </div>
          <div class="existing-foods">
            <h4>已添加的食物</h4>
            ${categoryFoods.map(food => `
              <div class="existing-food-item ${selectedFoods.includes(food.name) ? 'selected' : ''}" data-food="${food.name}">
                <span class="existing-food-text">${food.name}</span>
                ${selectedFoods.includes(food.name) ? '<span class="checkmark-text">×</span>' : ''}
              </div>
            `).join('')}
          </div>
        </div>
        <div class="modal-buttons">
          <button class="modal-button modal-button-cancel" id="cancel-food-btn">${t('back')}</button>
          <button class="modal-button modal-button-confirm" id="confirm-food-btn">${t('confirm')}</button>
        </div>
      </div>
    </div>
  `;

  // 移除已有的模态框
  const existingModal = document.getElementById('food-modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 添加新的模态框
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // 绑定事件
  document.getElementById('food-input').addEventListener('input', (e) => {
    foodInput = e.target.value;
  });

  document.getElementById('add-food-btn').addEventListener('click', handleAddFood);
  document.getElementById('random-food-btn').addEventListener('click', handleRandomFood);
  document.getElementById('cancel-food-btn').addEventListener('click', handleCancelFood);
  document.getElementById('confirm-food-btn').addEventListener('click', handleConfirmFood);

  // 绑定现有食物点击事件
  document.querySelectorAll('.existing-food-item').forEach(item => {
    item.addEventListener('click', () => {
      const foodName = item.dataset.food;
      toggleFoodSelection(foodName);
    });
  });
}

// 处理添加食物
function handleAddFood() {
  if (foodInput.trim()) {
    const foodName = foodInput.trim();
    
    // 添加到选中食物列表
    if (!selectedFoods.includes(foodName)) {
      selectedFoods.push(foodName);
    }
    
    // 检查是否已存在于食物数据库中
    const existingFood = foods.find(f => f.categoryId === currentFoodCategory && f.name === foodName);
    if (!existingFood) {
      // 添加到食物数据库
      const newFood = {
        id: Date.now(),
        name: foodName,
        categoryId: currentFoodCategory
      };
      foods.push(newFood);
      saveFoods();
    }
    
    foodInput = '';
    renderCurrentTab();
  }
}

// 处理随机食物
function handleRandomFood() {
  const categoryFoods = foods.filter(item => item.categoryId === currentFoodCategory);
  if (categoryFoods.length > 0) {
    const availableFoods = categoryFoods.filter(food => !selectedFoods.includes(food.name));
    const foodToAdd = availableFoods.length > 0 ? 
      availableFoods[Math.floor(Math.random() * availableFoods.length)] : 
      categoryFoods[Math.floor(Math.random() * categoryFoods.length)];
    
    if (!selectedFoods.includes(foodToAdd.name)) {
      selectedFoods.push(foodToAdd.name);
      renderCurrentTab();
    }
  }
}

// 切换食物选择状态
function toggleFoodSelection(foodName) {
  if (selectedFoods.includes(foodName)) {
    selectedFoods = selectedFoods.filter(food => food !== foodName);
  } else {
    selectedFoods.push(foodName);
  }
  renderCurrentTab();
}

// 处理取消食物选择
function handleCancelFood() {
  showFoodModal = false;
  selectedFoods = [];
  renderCurrentTab();
}

// 处理确认食物选择
function handleConfirmFood() {
  // 保存选中的食物
  if (selectedFoods.length > 0) {
    // 如果选中了多个食物，用逗号分隔
    const foodValue = selectedFoods.join(', ');
    
    // 自动添加新食物到数据库
    selectedFoods.forEach(foodName => {
      const existingFood = foods.find(f => f.categoryId === currentFoodCategory && f.name === foodName);
      if (!existingFood) {
        const newFood = {
          id: Date.now(),
          name: foodName,
          categoryId: currentFoodCategory
        };
        foods.push(newFood);
      }
    });
    saveFoods();
    
    // 更新食物选择
    if (!window.foodSelections) {
      window.foodSelections = {};
    }
    window.foodSelections[currentFoodCategory] = foodValue;
  } else {
    // 如果没有选中食物，也保存该类别（表示吃了这一餐但没记录具体食物）
    if (!window.foodSelections) {
      window.foodSelections = {};
    }
    window.foodSelections[currentFoodCategory] = '';
  }
  
  showFoodModal = false;
  selectedFoods = [];
  renderCurrentTab();
}

// 处理保存记录
function handleSaveRecord() {
  const date = document.getElementById('record-date').value;
  const selectedActivities = Array.from(document.querySelectorAll('#activity-tags .tag.selected')).map(tag => parseInt(tag.dataset.id));
  const selectedLocations = Array.from(document.querySelectorAll('#location-tags .tag.selected')).map(tag => parseInt(tag.dataset.id));
  const locations = selectedLocations.length > 0 ? selectedLocations : null;
  const notes = document.getElementById('record-notes').value;
  const selectedMood = Array.from(document.querySelectorAll('.mood-button.selected'))[0];
  const mood = selectedMood ? parseInt(selectedMood.dataset.value) : 3;

  // 收集食物选择
  const foods = window.foodSelections || {};

  if (selectedActivities.length === 0) {
    showToast(`${t('tip')}: ${t('please_select_activity')}`);
    return;
  }

  // 获取当前记录的日期（仅日期部分）
  const currentDate = new Date(date);
  // 设置时间为中午12点，确保日期一致性
  currentDate.setHours(12, 0, 0, 0);
  const currentDateStr = currentDate.toISOString().split('T')[0];

  // 检查是否已存在同一天的记录
  const existingEntryIndex = diaryEntries.findIndex(entry => {
    const entryDate = new Date(entry.date);
    const entryDateStr = entryDate.toISOString().split('T')[0];
    return entryDateStr === currentDateStr;
  });

  if (editingEntryId) {
    // 编辑现有记录
    const index = diaryEntries.findIndex(e => e.id === editingEntryId);
    
    // 检查是否改变了日期
    const originalEntry = diaryEntries[index];
    const originalDate = new Date(originalEntry.date);
    originalDate.setHours(12, 0, 0, 0);
    const originalDateStr = originalDate.toISOString().split('T')[0];
    
    if (originalDateStr === currentDateStr) {
      // 日期未改变，直接更新记录
      diaryEntries[index] = {
        id: editingEntryId,
        date: currentDate.toISOString(),
        activities: selectedActivities,
        locations: locations,
        foods: foods,
        mood: mood,
        notes: notes
      };
    } else {
      // 日期已改变，检查新日期是否已有记录
      const newDateEntryIndex = diaryEntries.findIndex(entry => {
        if (entry.id === editingEntryId) return false; // 跳过当前编辑的记录
        const entryDate = new Date(entry.date);
        const entryDateStr = entryDate.toISOString().split('T')[0];
        return entryDateStr === currentDateStr;
      });
      
      if (newDateEntryIndex >= 0) {
        // 新日期已有记录，合并到现有记录
        const existingEntry = diaryEntries[newDateEntryIndex];
        
        // 合并活动（去重）
        const mergedActivities = [...new Set([...existingEntry.activities, ...selectedActivities])];
        
        // 合并地点（去重）
        const existingLocations = Array.isArray(existingEntry.locations) ? existingEntry.locations : (existingEntry.location ? [existingEntry.location] : []);
        const currentLocations = Array.isArray(locations) ? locations : (locations ? [locations] : []);
        const mergedLocations = [...new Set([...existingLocations, ...currentLocations])];
        
        // 合并食物
        const mergedFoods = { ...existingEntry.foods, ...foods };
        
        // 合并备注
        const mergedNotes = existingEntry.notes ? `${existingEntry.notes}\n${notes}` : notes;
        
        // 更新记录
        diaryEntries[newDateEntryIndex] = {
          ...existingEntry,
          date: currentDate.toISOString(),
          activities: mergedActivities,
          locations: mergedLocations.length > 0 ? mergedLocations : null,
          foods: mergedFoods,
          mood: mood, // 使用新的心情
          notes: mergedNotes
        };
        
        // 删除原记录
        diaryEntries = diaryEntries.filter(e => e.id !== editingEntryId);
      } else {
        // 新日期没有记录，直接更新当前记录的日期
        diaryEntries[index] = {
          id: editingEntryId,
          date: currentDate.toISOString(),
          activities: selectedActivities,
          locations: locations,
          foods: foods,
          mood: mood,
          notes: notes
        };
      }
    }
  } else if (existingEntryIndex >= 0) {
    // 合并到现有记录
    const existingEntry = diaryEntries[existingEntryIndex];
    
    // 合并活动（去重）
    const mergedActivities = [...new Set([...existingEntry.activities, ...selectedActivities])];
    
    // 合并地点（去重）
    const existingLocations = Array.isArray(existingEntry.locations) ? existingEntry.locations : (existingEntry.location ? [existingEntry.location] : []);
    const currentLocations = Array.isArray(locations) ? locations : (locations ? [locations] : []);
    const mergedLocations = [...new Set([...existingLocations, ...currentLocations])];
    
    // 合并食物
    const mergedFoods = { ...existingEntry.foods, ...foods };
    
    // 合并备注
    const mergedNotes = existingEntry.notes ? `${existingEntry.notes}\n${notes}` : notes;
    
    // 更新记录
    diaryEntries[existingEntryIndex] = {
      ...existingEntry,
      date: currentDate.toISOString(),
      activities: mergedActivities,
      locations: mergedLocations.length > 0 ? mergedLocations : null,
      foods: mergedFoods,
      mood: mood, // 使用新的心情
      notes: mergedNotes
    };
  } else {
    // 创建新记录
    const entry = {
      id: Date.now(),
      date: currentDate.toISOString(),
      activities: selectedActivities,
      locations: locations,
      foods: foods,
      mood: mood,
      notes: notes
    };
    diaryEntries.push(entry);
  }

  saveDiaryEntries();
  editingEntryId = null;
  window.foodSelections = {};
  window.activitySelections = [];
  window.locationSelection = '';
  window.recordDate = null;
  showToast(t('record_saved'));
  renderRecordTab();
}

// 时间段筛选变量
let currentTimeRange = 'all';

// 打开自定义时间段选择
function openCustomTimeRange() {
  currentTimeRange = 'custom';
  renderAnalysisTab();
}

// 应用自定义日期范围
function applyCustomDateRange() {
  const startDateInput = document.getElementById('custom-start-date');
  const endDateInput = document.getElementById('custom-end-date');
  
  if (startDateInput && endDateInput) {
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    
    if (startDate && endDate) {
      // 验证开始日期不晚于结束日期
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      if (start > end) {
        showToast('开始日期不能晚于结束日期');
        return;
      }
      
      // 存储自定义日期范围
      localStorage.setItem('customTimeRangeStart', startDate);
      localStorage.setItem('customTimeRangeEnd', endDate);
      currentTimeRange = 'custom';
      renderAnalysisTab();
    } else {
      showToast('请输入开始日期和结束日期');
    }
  }
}

// 渲染分析页面
function renderAnalysisTab() {
  const stats = calculateStats(currentTimeRange);

  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h2>${t('analysis')}</h2>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <button class="btn ${currentTimeRange === 'all' ? 'btn-primary' : 'btn-secondary'}" onclick="setTimeRange('all')">全部</button>
          <button class="btn ${currentTimeRange === '7days' ? 'btn-primary' : 'btn-secondary'}" onclick="setTimeRange('7days')">最近七天</button>
          <button class="btn ${currentTimeRange === 'week' ? 'btn-primary' : 'btn-secondary'}" onclick="setTimeRange('week')">本周</button>
          <button class="btn ${currentTimeRange === 'month' ? 'btn-primary' : 'btn-secondary'}" onclick="setTimeRange('month')">本月</button>
          <button class="btn ${currentTimeRange === 'lastMonth' ? 'btn-primary' : 'btn-secondary'}" onclick="setTimeRange('lastMonth')">上月</button>
          <button class="btn ${currentTimeRange === 'custom' ? 'btn-primary' : 'btn-secondary'}" onclick="openCustomTimeRange()">自定义</button>
          <input type="date" class="form-input" id="custom-start-date" style="width: 140px; display: none;" placeholder="开始日期">
          <input type="date" class="form-input" id="custom-end-date" style="width: 140px; display: none;" placeholder="结束日期">
          <button class="btn btn-primary" onclick="applyCustomDateRange()" style="display: none;" id="apply-custom-date">应用</button>
        </div>
      </div>
      <div class="analysis-stats">
        <div class="stat-card">
          <div class="stat-value">${stats.totalRecords}</div>
          <div class="stat-label">${t('total_records')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${stats.avgMood.toFixed(1)}</div>
          <div class="stat-label">${t('avg_mood')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${stats.mostFrequentActivity}</div>
          <div class="stat-label">${t('most_frequent_activity')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${stats.mostFrequentLocation}</div>
          <div class="stat-label">${t('most_frequent_location')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${stats.mostFrequentFood}</div>
          <div class="stat-label">最常吃的</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${stats.lastHappyDate || '-'}</div>
          <div class="stat-label">上一次感到开心</div>
        </div>
      </div>
    </div>
    <div class="card">
      <h3>心情趋势</h3>
      <div class="chart-container" id="mood-trend-chart">
        <!-- 折线图将通过 Canvas 绘制 -->
      </div>
    </div>
    <div class="card">
      <h3>活动分析</h3>
      <div class="chart-container" id="activity-chart">
        <!-- 饼状图将通过 Canvas 绘制 -->
      </div>
      <div class="chart-container" id="activity-bar-chart" style="margin-top: 20px;">
        <!-- 横向条形图将通过 Canvas 绘制 -->
      </div>
    </div>
    <div class="card">
      <h3>地点分析</h3>
      <div class="chart-container" id="location-chart">
        <!-- 饼状图将通过 Canvas 绘制 -->
      </div>
      <div class="chart-container" id="location-bar-chart" style="margin-top: 20px;">
        <!-- 横向条形图将通过 Canvas 绘制 -->
      </div>
    </div>
    <div class="card">
      <h3>饮食分析</h3>
      <div class="chart-container" id="food-bar-chart">
        <!-- 横向条形图将通过 Canvas 绘制 -->
      </div>
    </div>
  `;

  // 绘制图表
  setTimeout(() => {
    drawMoodTrendChart('mood-trend-chart', stats.moodTrendData);
    drawPieChart('activity-chart', stats.activityDistribution);
    drawHorizontalBarChart('activity-bar-chart', stats.activityDistribution);
    drawPieChart('location-chart', stats.locationDistribution);
    drawHorizontalBarChart('location-bar-chart', stats.locationDistribution);
    drawHorizontalBarChart('food-bar-chart', stats.foodDistribution);
    
    // 设置自定义日期输入框的值
    const startDateInput = document.getElementById('custom-start-date');
    const endDateInput = document.getElementById('custom-end-date');
    const applyButton = document.getElementById('apply-custom-date');
    if (startDateInput && endDateInput && applyButton) {
      const startDate = localStorage.getItem('customTimeRangeStart');
      const endDate = localStorage.getItem('customTimeRangeEnd');
      if (startDate) startDateInput.value = startDate;
      if (endDate) endDateInput.value = endDate;
      
      // 根据currentTimeRange的值决定是否显示日期输入框和应用按钮
      if (currentTimeRange === 'custom') {
        startDateInput.style.display = 'block';
        endDateInput.style.display = 'block';
        applyButton.style.display = 'block';
      } else {
        startDateInput.style.display = 'none';
        endDateInput.style.display = 'none';
        applyButton.style.display = 'none';
      }
    }
  }, 100);
}

// 绘制心情趋势折线图
function drawMoodTrendChart(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // 清除容器内的所有子元素
  container.innerHTML = '';

  const canvas = document.createElement('canvas');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const padding = 40;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  if (data.length === 0) {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#666';
    ctx.textAlign = 'center';
    ctx.fillText('没有数据', width / 2, height / 2);
    return;
  }

  // 计算数据范围
  const minMood = 1;
  const maxMood = 5;

  // 绘制坐标轴
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.strokeStyle = '#666';
  ctx.stroke();

  // 绘制刻度
  for (let i = minMood; i <= maxMood; i++) {
    const y = height - padding - (i - minMood) / (maxMood - minMood) * chartHeight;
    ctx.beginPath();
    ctx.moveTo(padding - 5, y);
    ctx.lineTo(padding, y);
    ctx.strokeStyle = '#666';
    ctx.stroke();
    ctx.font = '12px Arial';
    ctx.fillStyle = '#666';
    ctx.textAlign = 'right';
    ctx.fillText(i, padding - 10, y + 4);
  }

  // 绘制折线
  ctx.beginPath();
  data.forEach((point, index) => {
    const x = padding + (index / (data.length - 1)) * chartWidth;
    const y = height - padding - (point.mood - minMood) / (maxMood - minMood) * chartHeight;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.strokeStyle = '#6366F1';
  ctx.lineWidth = 2;
  ctx.stroke();

  // 绘制数据点
  data.forEach((point, index) => {
    const x = padding + (index / (data.length - 1)) * chartWidth;
    const y = height - padding - (point.mood - minMood) / (maxMood - minMood) * chartHeight;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#6366F1';
    ctx.fill();
  });

  // 绘制日期标签
  const labelInterval = Math.max(1, Math.floor(data.length / 6));
  data.forEach((point, index) => {
    if (index % labelInterval === 0 || index === data.length - 1) {
      const x = padding + (index / (data.length - 1)) * chartWidth;
      ctx.font = '12px Arial';
      ctx.fillStyle = '#666';
      ctx.textAlign = 'center';
      // 只显示月份和日子，不显示年份
      const dateParts = point.date.split('-');
      const monthDay = `${dateParts[1]}-${dateParts[2]}`;
      ctx.fillText(monthDay, x, height - padding + 20);
    }
  });
}

// 设置时间段
function setTimeRange(range) {
  currentTimeRange = range;
  renderAnalysisTab();
}

// 计算统计数据
function calculateStats(timeRange = 'all') {
  // 根据时间段筛选记录
  let filteredEntries = diaryEntries;
  const now = new Date();
  
  if (timeRange === '7days') {
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    filteredEntries = diaryEntries.filter(entry => new Date(entry.date) >= sevenDaysAgo);
  } else if (timeRange === 'week') {
    // 本周（从周一开始）
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay() + 1);
    weekStart.setHours(0, 0, 0, 0);
    filteredEntries = diaryEntries.filter(entry => new Date(entry.date) >= weekStart);
  } else if (timeRange === 'month') {
    // 本月
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    filteredEntries = diaryEntries.filter(entry => new Date(entry.date) >= monthStart);
  } else if (timeRange === 'lastMonth') {
    // 上月
    const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
    lastMonthEnd.setHours(23, 59, 59, 999);
    filteredEntries = diaryEntries.filter(entry => {
      const entryDate = new Date(entry.date);
      return entryDate >= lastMonthStart && entryDate <= lastMonthEnd;
    });
  } else if (timeRange === 'custom') {
    // 自定义时间段
    const startDate = localStorage.getItem('customTimeRangeStart');
    const endDate = localStorage.getItem('customTimeRangeEnd');
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      filteredEntries = diaryEntries.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= start && entryDate <= end;
      });
    } else {
      // 如果没有自定义日期范围，使用全部时间
      filteredEntries = diaryEntries;
    }
  }

  if (filteredEntries.length === 0) {
    return {
      totalRecords: 0,
      avgMood: 0,
      mostFrequentActivity: '-',
      mostFrequentLocation: '-',
      mostFrequentFood: '-',
      lastHappyDate: '-',
      activityDistribution: [],
      locationDistribution: [],
      foodDistribution: []
    };
  }

  // 总记录数
  const totalRecords = filteredEntries.length;

  // 平均心情
  const avgMood = filteredEntries.reduce((sum, entry) => sum + entry.mood, 0) / totalRecords;

  // 活动统计
  const activityCount = {};
  filteredEntries.forEach(entry => {
    entry.activities.forEach(activityId => {
      activityCount[activityId] = (activityCount[activityId] || 0) + 1;
    });
  });
  const mostFrequentActivityId = Object.keys(activityCount).reduce((a, b) => activityCount[a] > activityCount[b] ? a : b, null);
  const mostFrequentActivity = mostFrequentActivityId ? activities.find(a => a.id == mostFrequentActivityId)?.name || '-' : '-';

  // 地点统计
  const locationCount = {};
  filteredEntries.forEach(entry => {
    if (Array.isArray(entry.locations)) {
      entry.locations.forEach(locationId => {
        locationCount[locationId] = (locationCount[locationId] || 0) + 1;
      });
    } else if (entry.location) {
      locationCount[entry.location] = (locationCount[entry.location] || 0) + 1;
    }
  });
  const mostFrequentLocationId = Object.keys(locationCount).reduce((a, b) => locationCount[a] > locationCount[b] ? a : b, null);
  const mostFrequentLocation = mostFrequentLocationId ? locations.find(l => l.id == mostFrequentLocationId)?.name || '-' : '-';

  // 食物统计
  const foodCount = {};
  filteredEntries.forEach(entry => {
    Object.values(entry.foods).forEach(foodNames => {
      if (foodNames) {
        foodNames.split(', ').forEach(foodName => {
          foodCount[foodName] = (foodCount[foodName] || 0) + 1;
        });
      }
    });
  });
  let mostFrequentFood = '-';
  if (Object.keys(foodCount).length > 0) {
    const mostFrequentFoodName = Object.keys(foodCount).reduce((a, b) => foodCount[a] > foodCount[b] ? a : b);
    mostFrequentFood = mostFrequentFoodName;
  }

  // 上一次感到开心的日期
  let lastHappyDate = '-';
  const happyEntries = filteredEntries.filter(entry => entry.mood === 5);
  if (happyEntries.length > 0) {
    happyEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    lastHappyDate = formatDate(happyEntries[0].date);
  }

  // 活动分布
  const activityDistribution = activities.map(activity => ({
    name: activity.name,
    value: activityCount[activity.id] || 0,
    color: activity.color
  })).filter(item => item.value > 0);

  // 地点分布
  const locationDistribution = locations.map(location => ({
    name: location.name,
    value: locationCount[location.id] || 0,
    color: location.color
  })).filter(item => item.value > 0);

  // 食物分布
  const foodDistribution = Object.entries(foodCount).map(([name, value]) => {
    // 尝试找到食物所属的类别，使用类别的颜色
    let foodColor = getRandomColor();
    for (const food of foods) {
      if (food.name === name) {
        const category = foodCategories.find(c => c.id === food.categoryId);
        if (category) {
          foodColor = category.color;
        }
        break;
      }
    }
    return {
      name: name,
      value: value,
      color: foodColor
    };
  }).sort((a, b) => b.value - a.value);

  // 计算心情趋势
  const moodTrend = {};
  filteredEntries.forEach(entry => {
    const dateStr = entry.date.split('T')[0];
    if (!moodTrend[dateStr]) {
      moodTrend[dateStr] = [];
    }
    moodTrend[dateStr].push(entry.mood);
  });
  
  // 计算时间范围内的所有日期
  let startDate, endDate;
  if (timeRange === '7days') {
    endDate = new Date();
    startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  } else if (timeRange === 'week') {
    // 本周（从周一开始）
    endDate = new Date();
    startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - endDate.getDay() + 1);
  } else if (timeRange === 'month') {
    // 本月
    endDate = new Date();
    startDate = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
  } else if (timeRange === 'lastMonth') {
    // 上月
    endDate = new Date(now.getFullYear(), now.getMonth(), 0);
    startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  } else if (timeRange === 'custom') {
    // 自定义时间段
    const startDateStr = localStorage.getItem('customTimeRangeStart');
    const endDateStr = localStorage.getItem('customTimeRangeEnd');
    if (startDateStr && endDateStr) {
      startDate = new Date(startDateStr);
      endDate = new Date(endDateStr);
    } else {
      startDate = new Date();
      endDate = new Date();
    }
  } else {
    // 全部时间
    if (filteredEntries.length > 0) {
      startDate = new Date(Math.min(...filteredEntries.map(entry => new Date(entry.date))));
      endDate = new Date(Math.max(...filteredEntries.map(entry => new Date(entry.date))));
    } else {
      startDate = new Date();
      endDate = new Date();
    }
  }
  
  // 生成时间范围内的所有日期
  const allDates = [];
  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    allDates.push(currentDate.toISOString().split('T')[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  // 计算每天的平均心情，如果没有记录则默认心情为3
  const moodTrendData = allDates.map(date => {
    const moods = moodTrend[date] || [3];
    const avgMood = moods.reduce((sum, mood) => sum + mood, 0) / moods.length;
    return { date, mood: avgMood };
  });

  return {
    totalRecords,
    avgMood,
    mostFrequentActivity,
    mostFrequentLocation,
    mostFrequentFood,
    lastHappyDate,
    activityDistribution,
    locationDistribution,
    foodDistribution,
    moodTrendData
  };
}

// 绘制饼图
function drawPieChart(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // 清除容器内的所有子元素
  container.innerHTML = '';

  const canvas = document.createElement('canvas');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) - 20;

  let startAngle = 0;
  const total = data.reduce((sum, item) => sum + item.value, 0);

  data.forEach(item => {
    const sliceAngle = (item.value / total) * 2 * Math.PI;
    
    // 绘制扇形
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = item.color;
    ctx.fill();
    
    // 绘制标签
    const labelAngle = startAngle + sliceAngle / 2;
    const labelX = centerX + Math.cos(labelAngle) * (radius + 30);
    const labelY = centerY + Math.sin(labelAngle) * (radius + 30);
    
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${item.name}: ${item.value}`, labelX, labelY);
    
    startAngle += sliceAngle;
  });
}

// 绘制横向条形图
function drawHorizontalBarChart(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // 清除容器内的所有子元素
  container.innerHTML = '';

  const canvas = document.createElement('canvas');
  canvas.width = container.clientWidth;
  canvas.height = Math.max(200, data.length * 40);
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const padding = 20;
  const barHeight = 30;
  const maxBarWidth = canvas.width - padding * 3;
  
  // 计算最大值
  const maxValue = Math.max(...data.map(item => item.value));
  
  // 绘制条形图
  data.forEach((item, index) => {
    const x = padding;
    const y = padding + index * (barHeight + 10);
    const barWidth = (item.value / maxValue) * maxBarWidth;
    
    // 绘制条形
    ctx.fillStyle = item.color;
    ctx.fillRect(x, y, barWidth, barHeight);
    
    // 绘制标签
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`${item.name}: ${item.value}`, x + 10, y + barHeight / 2 + 5);
  });
}

// 获取随机颜色
// 生成随机颜色，确保相邻颜色不同
let lastUsedColor = '';
function getRandomColor() {
  const colors = ['#6366f1', '#10b981', '#f97316', '#ec4899', '#8b5cf6', '#06b6d4', '#f59e0b', '#ef4444'];
  
  // 过滤掉上一次使用的颜色
  const availableColors = colors.filter(color => color !== lastUsedColor);
  
  // 随机选择一个颜色
  const selectedColor = availableColors[Math.floor(Math.random() * availableColors.length)];
  
  // 更新上一次使用的颜色
  lastUsedColor = selectedColor;
  
  return selectedColor;
}

// 渲染数据页面
function renderDataTab() {
  // 按日期排序，最新的在前
  const sortedEntries = [...diaryEntries].sort((a, b) => new Date(b.date) - new Date(a.date));

  // 计算日历标记
  markedDates = {};
  diaryEntries.forEach(entry => {
    const dateStr = entry.date.split('T')[0];
    if (!markedDates[dateStr]) {
      markedDates[dateStr] = { moods: [] };
    }
    markedDates[dateStr].moods.push(entry.mood);
  });

  // 计算每天的平均心情并设置颜色
  Object.keys(markedDates).forEach(date => {
    const avgMood = markedDates[date].moods.reduce((sum, mood) => sum + mood, 0) / markedDates[date].moods.length;
    
    let color;
    switch (Math.round(avgMood)) {
      case 1:
        color = 'rgb(139, 0, 0)'; // 深红色
        break;
      case 2:
        color = 'rgb(205, 0, 0)'; // 红色
        break;
      case 3:
        color = 'rgb(255, 50, 50)'; // 浅红色
        break;
      case 4:
        color = 'rgb(255, 100, 100)'; // 淡红色
        break;
      case 5:
        color = 'rgb(255, 150, 150)'; // 粉红色
        break;
      default:
        color = 'rgb(200, 200, 200)'; // 默认灰色
    }

    markedDates[date] = {
      ...markedDates[date],
      marked: true,
      selected: true,
      selectedColor: color,
      selectedTextColor: Math.round(avgMood) <= 2 ? '#ffffff' : '#000000',
      dotColor: color,
    };
  });

  let entriesHtml = '';
  if (sortedEntries.length === 0) {
    entriesHtml = `<div class="empty-state">${t('no_records')}</div>`;
  } else {
    entriesHtml = sortedEntries.map(entry => {
      const activityNames = entry.activities.map(id => activities.find(a => a.id == id)?.name).filter(Boolean).join(', ');
      const locationNames = Array.isArray(entry.locations) ? entry.locations.map(id => locations.find(l => l.id == id)?.name).filter(Boolean).join(', ') : (entry.location ? locations.find(l => l.id == entry.location)?.name : '-');
      const foodNames = Object.values(entry.foods).filter(Boolean).join(', ');
      const moodEmojis = ['😢', '😔', '😐', '😊', '😄'];
      const moodEmoji = moodEmojis[entry.mood - 1] || '😐';

      return `
        <div class="list-item">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3>${formatDate(entry.date)}</h3>
            <div>
              <button class="btn btn-secondary" style="margin-right: 8px;" onclick="editEntry(${entry.id})">🖊</button>
              <button class="btn btn-danger" onclick="deleteEntry(${entry.id})">🗑️</button>
            </div>
          </div>
          <div style="margin-top: 8px;">
            <p><strong>${t('activities')}:</strong> ${activityNames || '-'}</p>
            <p><strong>${t('locations')}:</strong> ${locationNames || '-'}</p>
            <p><strong>${t('foods')}:</strong> ${foodNames || '-'}</p>
            <p><strong>${t('mood')}:</strong> ${moodEmoji} (${entry.mood})</p>
            ${entry.notes ? `<p><strong>${t('notes')}:</strong> ${entry.notes}</p>` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  mainContent.innerHTML = `
    <div class="card">
      <h2>${t('records')}</h2>
      <!-- 日历视图 -->
      <div class="calendar-container">
        <div class="calendar-header">
          <button class="btn btn-secondary" id="prev-month">&lt;</button>
          <h3 id="current-month"></h3>
          <button class="btn btn-secondary" id="next-month">&gt;</button>
        </div>
        <div class="calendar-weekdays" id="calendar-weekdays"></div>
        <div class="calendar-grid" id="calendar-grid"></div>
      </div>
      <div class="list">
        ${entriesHtml}
      </div>
    </div>
  `;

  // 渲染日历
  renderCalendar();

  // 绑定日历导航事件
  document.getElementById('prev-month').addEventListener('click', () => { currentMonth--; renderCalendar(); });
  document.getElementById('next-month').addEventListener('click', () => { currentMonth++; renderCalendar(); });
}

// 渲染日历
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar() {
  const calendarGrid = document.getElementById('calendar-grid');
  const calendarWeekdays = document.getElementById('calendar-weekdays');
  const currentMonthElement = document.getElementById('current-month');
  
  if (!calendarGrid || !currentMonthElement || !calendarWeekdays) return;
  
  // 设置当前月份标题
  const monthNames = [
    '一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'
  ];
  currentMonthElement.textContent = `${currentYear}年 ${monthNames[currentMonth]}`;
  
  // 计算当月第一天是星期几
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  // 计算当月有多少天
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // 渲染星期标题
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  let weekdaysHtml = '';
  weekdays.forEach(day => {
    weekdaysHtml += `<div class="calendar-weekday">${day}</div>`;
  });
  calendarWeekdays.innerHTML = weekdaysHtml;
  
  // 生成日历网格
  let calendarHtml = '';
  
  // 添加上个月的占位
  for (let i = 0; i < firstDay; i++) {
    calendarHtml += '<div class="calendar-day empty"></div>';
  }
  
  // 添加当月的日期
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const markedDate = markedDates[dateStr];
    const isToday = dateStr === new Date().toISOString().split('T')[0];
    
    let dayClass = 'calendar-day';
    let dayStyle = '';
    let dayContent = day;
    
    if (markedDate) {
      dayClass += ' marked';
      dayStyle = `background-color: ${markedDate.selectedColor}; color: ${markedDate.selectedTextColor};`;
    }
    
    if (isToday) {
      dayClass += ' today';
    }
    
    calendarHtml += `<div class="${dayClass}" style="${dayStyle}" data-date="${dateStr}">${dayContent}</div>`;
  }
  
  calendarGrid.innerHTML = calendarHtml;
  
  // 绑定日期点击事件
  document.querySelectorAll('.calendar-day').forEach(day => {
    day.addEventListener('click', () => {
      const date = day.dataset.date;
      if (date) {
        // 可以在这里添加日期点击后的逻辑，比如显示该日期的记录
        console.log('Selected date:', date);
      }
    });
  });
}

// 编辑记录
function editEntry(id) {
  editingEntryId = id;
  // 跳转到编辑界面，不显示导航栏
  showEditPage = true;
  renderEditPage();
}

// 删除记录
function deleteEntry(id) {
  if (confirm('确定删除这条记录？')) {
    diaryEntries = diaryEntries.filter(e => e.id !== id);
    saveDiaryEntries();
    showToast('记录已删除');
    renderDataTab();
  }
}

// 渲染设置页面
function renderSettingsTab() {
  if (settingsSubPage) {
    // 渲染二级管理页面
    switch (settingsSubPage) {
      case 'activities':
        renderActivitiesManagement();
        break;
      case 'locations':
        renderLocationsManagement();
        break;
      case 'foods':
        renderFoodsManagement();
        break;
      case 'data':
        renderDataManagement();
        break;
      case 'about':
        renderAboutPage();
        break;
    }
  } else {
    // 渲染主设置页面
    mainContent.innerHTML = `
      <div class="card">
        <h2>${t('settings')}</h2>
        <div class="form-group">
          <label class="form-label">${t('language')}</label>
          <select class="form-input" id="language-select">
            <option value="zh" ${currentLang === 'zh' ? 'selected' : ''}>${t('chinese')}</option>
            <option value="en" ${currentLang === 'en' ? 'selected' : ''}>${t('english')}</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">${t('theme')}</label>
          <select class="form-input" id="theme-select">
            <option value="light" ${currentTheme === 'light' ? 'selected' : ''}>${t('light_mode')}</option>
            <option value="dark" ${currentTheme === 'dark' ? 'selected' : ''}>${t('dark_mode')}</option>
          </select>
        </div>
      </div>
      <div class="settings-buttons-container">
        <button class="btn btn-primary settings-button" id="manage-activities">活动管理</button>
        <button class="btn btn-primary settings-button" id="manage-locations">地点管理</button>
        <button class="btn btn-primary settings-button" id="manage-foods">饮食管理</button>
        <button class="btn btn-primary settings-button" id="manage-data">数据管理</button>
        <button class="btn btn-primary settings-button" id="manage-about">关于</button>
      </div>
    `;

    // 绑定事件
    document.getElementById('language-select').addEventListener('change', (e) => {
      currentLang = e.target.value;
      settings.language = currentLang;
      saveSettings();
      updateNavigationLabels();
      renderSettingsTab();
    });

    document.getElementById('theme-select').addEventListener('change', (e) => {
      currentTheme = e.target.value;
      settings.theme = currentTheme;
      saveSettings();
      applyTheme();
      renderSettingsTab();
    });
    
    // 绑定管理按钮事件
    document.getElementById('manage-activities').addEventListener('click', () => {
      settingsSubPage = 'activities';
      renderSettingsTab();
    });
    
    document.getElementById('manage-locations').addEventListener('click', () => {
      settingsSubPage = 'locations';
      renderSettingsTab();
    });
    
    document.getElementById('manage-foods').addEventListener('click', () => {
      settingsSubPage = 'foods';
      renderSettingsTab();
    });
    
    document.getElementById('manage-data').addEventListener('click', () => {
      settingsSubPage = 'data';
      renderSettingsTab();
    });
    
    document.getElementById('manage-about').addEventListener('click', () => {
      settingsSubPage = 'about';
      renderSettingsTab();
    });
  }
}

// 渲染关于页面
function renderAboutPage() {
  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2>关于</h2>
        <button class="btn btn-secondary" id="back-to-settings">${t('back')}</button>
      </div>
      <div class="about-content">
        <h3>口己 (Kouji)</h3>
        <p>版本号: 0.1</p>
        <p>作者: 伊林（Eileen）</p>
        <h4>更新日志</h4>
        <ul>
          <li>初始版本发布</li>
          <li>支持记录日常活动、地点、饮食和心情</li>
          <li>支持数据分析和可视化</li>
          <li>支持多平台运行（Web和APK）</li>
          <li>支持主题切换和国际化</li>
          <li>支持数据导入/导出</li>
        </ul>
      </div>
    </div>
  `;

  // 绑定返回按钮事件
  document.getElementById('back-to-settings').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });
}

// 渲染数据管理页面
function renderDataManagement() {
  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2>数据管理</h2>
        <button class="btn btn-secondary" id="back-to-settings">${t('back')}</button>
      </div>
      <div class="form-group">
        <h3>导出数据</h3>
        <button class="btn btn-primary" id="export-excel" style="width: 100%; margin-bottom: 8px;">导出为Excel格式</button>
        <button class="btn btn-secondary" id="export-csv" style="width: 100%; margin-bottom: 8px;">导出为CSV格式</button>
        <button class="btn btn-secondary" id="export-clipboard" style="width: 100%; margin-bottom: 8px;">复制到剪贴板</button>
        <button class="btn btn-secondary" id="export-json" style="width: 100%; margin-bottom: 8px;">导出为JSON格式</button>
      </div>
      <div class="form-group">
        <h3>导入数据</h3>
        <input type="file" id="file-input" accept=".json" style="display: none;">
        <button class="btn btn-secondary" id="file-import-btn" style="width: 100%; margin-bottom: 8px;">📁 导入数据 (文件)</button>
        <button class="btn btn-secondary" id="clipboard-import-btn" style="width: 100%; margin-bottom: 8px;">📋 从剪贴板导入</button>
        <button class="btn btn-danger" id="reset-settings-btn" style="width: 100%;">🔄 初始化设置</button>
      </div>
    </div>
  `;

  // 绑定返回按钮事件
  document.getElementById('back-to-settings').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });
  
  // 绑定导出数据事件
  document.getElementById('export-excel').addEventListener('click', () => exportData('excel'));
  document.getElementById('export-csv').addEventListener('click', () => exportData('csv'));
  document.getElementById('export-clipboard').addEventListener('click', () => exportData('clipboard'));
  document.getElementById('export-json').addEventListener('click', () => exportData('json'));
  
  // 绑定导入数据事件
  document.getElementById('file-import-btn').addEventListener('click', () => {
    document.getElementById('file-input').click();
  });
  
  document.getElementById('file-input').addEventListener('change', importData);
  
  document.getElementById('clipboard-import-btn').addEventListener('click', () => {
    importFromClipboard();
  });
  
  // 绑定初始化设置按钮事件
  document.getElementById('reset-settings-btn').addEventListener('click', () => {
    if (confirm('确定要初始化所有设置吗？这将恢复所有预设值并清空所有数据！')) {
      resetSettings();
    }
  });
}

// 渲染活动管理页面
// 编辑活动函数
function editActivity(id) {
  const activity = activities.find(a => a.id === id);
  if (!activity) return;
  
  const newName = prompt('请输入活动名称', activity.name);
  if (newName && newName.trim()) {
    // 生成新的颜色
    const newColor = getRandomColor();
    
    // 更新活动
    activity.name = newName.trim();
    activity.color = newColor;
    
    saveActivities();
    showToast('活动已更新');
    renderActivitiesManagement();
  }
}

function renderActivitiesManagement() {
  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2>${t('activities')}</h2>
        <button class="btn btn-secondary" id="back-to-settings">${t('back')}</button>
      </div>
      <div style="margin-bottom: 16px;">
        <h3>添加活动</h3>
        <div style="display: flex; gap: 8px;">
          <input type="text" id="activity-name-input" class="form-input" placeholder="输入活动名称" style="flex: 1;">
          <button class="btn btn-primary" id="save-activity-btn">保存</button>
        </div>
      </div>
      <div id="activities-list">
        ${activities.map(activity => `
          <div class="list-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center;">
                <span style="display: inline-block; width: 12px; height: 12px; border-radius: 6px; background-color: ${activity.color}; margin-right: 8px;"></span>
                <span>${activity.name}</span>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn-secondary" onclick="editActivity(${activity.id})">🖊</button>
                <button class="btn btn-danger" onclick="deleteActivity(${activity.id})">🗑️</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // 绑定返回按钮事件
  const backButton = document.getElementById('back-to-settings');
  if (backButton) {
    backButton.addEventListener('click', () => {
      settingsSubPage = null;
      renderSettingsTab();
    });
  }

  // 绑定保存按钮事件
  const saveButton = document.getElementById('save-activity-btn');
  if (saveButton) {
    saveButton.addEventListener('click', () => {
      const activityNameInput = document.getElementById('activity-name-input');
      if (activityNameInput) {
        const activityName = activityNameInput.value.trim();
        if (activityName) {
          const newActivity = {
            id: Date.now(),
            name: activityName,
            color: getRandomColor()
          };
          activities.push(newActivity);
          saveActivities();
          showToast('活动已保存');
          activityNameInput.value = '';
          renderActivitiesManagement();
        } else {
          showToast('请输入活动名称');
        }
      }
    });
  } else {
    console.error('保存按钮未找到');
  }
}

// 渲染地点管理页面
function renderLocationsManagement() {
  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2>${t('locations')}</h2>
        <button class="btn btn-secondary" id="back-to-settings">${t('back')}</button>
      </div>
      <div id="locations-list">
        ${locations.map(location => `
          <div class="list-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center;">
                <span style="display: inline-block; width: 12px; height: 12px; border-radius: 6px; background-color: ${location.color}; margin-right: 8px;"></span>
                <span>${location.name}</span>
              </div>
              <button class="btn btn-danger" onclick="deleteLocation(${location.id})">🗑️</button>
            </div>
          </div>
        `).join('')}
        <button class="btn btn-primary" style="margin-top: 16px;" onclick="addLocation()">${t('add_location')}</button>
      </div>
    </div>
  `;

  // 绑定返回按钮事件
  document.getElementById('back-to-settings').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });
}

// 渲染饮食管理页面
function renderFoodsManagement() {
  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2>${t('foods')}</h2>
        <button class="btn btn-secondary" id="back-to-settings">${t('back')}</button>
      </div>
      <div id="foods-list">
        ${foodCategories.map(category => `
          <div style="margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;" class="food-category-header" data-category="${category.id}">
              <div style="display: flex; align-items: center;">
                <span style="display: inline-block; width: 12px; height: 12px; border-radius: 6px; background-color: ${category.color}; margin-right: 8px;"></span>
                <h4>${category.name}</h4>
              </div>
              <span class="category-toggle">▼</span>
            </div>
            <div class="food-category-content" id="category-${category.id}">
              ${foods.filter(food => food.categoryId == category.id).map(food => `
                <div class="list-item">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>${food.name}</span>
                    <button class="btn btn-danger" onclick="deleteFood(${food.id})">🗑️</button>
                  </div>
                </div>
              `).join('')}
              <button class="btn btn-secondary" style="margin-top: 8px;" onclick="addFood(${category.id})"><${t('add_food')}</button>
            </div>
          </div>
        `).join('')}
        <button class="btn btn-primary" style="margin-top: 16px;" onclick="addFoodCategory()">${t('add_food_category')}</button>
      </div>
    </div>
  `;

  // 绑定返回按钮事件
  document.getElementById('back-to-settings').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });
  
  // 绑定分类收起/展开事件
  document.querySelectorAll('.food-category-header').forEach(header => {
    header.addEventListener('click', () => {
      const categoryId = header.dataset.category;
      const content = document.getElementById(`category-${categoryId}`);
      const toggle = header.querySelector('.category-toggle');
      
      if (content.style.display === 'none') {
        content.style.display = 'block';
        toggle.textContent = '▼';
      } else {
        content.style.display = 'none';
        toggle.textContent = '▶';
      }
    });
  });
}

// 导出数据
// 通用导出工具函数
function generateExportData(type, includeSettings = false) {
  const exportData = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    type: type,
    diaryEntries: type === 'settings' ? [] : diaryEntries,
    activities: activities,
    locations: locations,
    foodCategories: foodCategories,
    foods: foods
  };
  
  if (includeSettings) {
    exportData.settings = settings;
  }
  
  return exportData;
}

// 生成CSV格式数据
function generateCSVData() {
  const headers = ['ID', '日期', '活动', '地点', '食物', '心情', '备注'];
  let csvContent = headers.join(',') + '\n';
  
  diaryEntries.forEach((entry, index) => {
    const activitiesNames = entry.activities.map(id => {
      const activity = activities.find(a => a.id === id);
      return activity ? activity.name : '';
    }).join('; ');
    
    const locationName = entry.location ? locations.find(l => l.id === entry.location)?.name || '' : '';
    
    const foodsNames = Object.entries(entry.foods).map(([categoryId, foodName]) => {
      const category = foodCategories.find(c => c.id == categoryId);
      return category ? `${category.name}: ${foodName}` : foodName;
    }).join('; ');
    
    const row = [
      index + 1,
      new Date(entry.date).toLocaleDateString(),
      activitiesNames,
      locationName,
      foodsNames,
      entry.mood,
      (entry.notes || '').replace(/"/g, '""')
    ];
    csvContent += row.map(field => `"${field}"`).join(',') + '\n';
  });
  
  return {
    blob: new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' }),
    ext: 'csv',
    mimeType: 'text/csv'
  };
}

// 生成导出数据Blob
function getDataBlob(format = 'json', type = 'full', includeSettings = false) {
  let data;
  
  if (format === 'json') {
    const exportData = generateExportData(type, includeSettings);
    data = {
      blob: new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' }),
      ext: 'json',
      mimeType: 'application/json'
    };
  } else if (format === 'csv' || format === 'excel') {
    data = generateCSVData();
  }
  
  return data;
}

function exportData(format = 'json') {
  const dateStr = new Date().toISOString().slice(0,10);
  
  if (format === 'clipboard') {
    // 复制到剪贴板
    const exportData = generateExportData('full', true);
    const jsonString = JSON.stringify(exportData, null, 2);
    
    navigator.clipboard.writeText(jsonString)
      .then(() => {
        showToast('数据已复制到剪贴板');
      })
      .catch(err => {
        console.error('复制失败:', err);
        showToast('复制失败，请手动复制');
      });
  } else if (format === 'excel') {
    // 导出为Excel格式
    const data = getDataBlob('csv');
    if (data) {
      downloadFile(data.blob, `kouji-data-${dateStr}.xlsx`);
      showToast(t('export_success'));
    }
  } else {
    // 导出为JSON或CSV格式
    const data = getDataBlob(format, 'full', true);
    if (data) {
      downloadFile(data.blob, `kouji-data-${dateStr}.${data.ext}`);
      showToast(t('export_success'));
    }
  }
}

function exportSettings(format = 'json') {
  const dateStr = new Date().toISOString().slice(0,10);
  const data = getDataBlob(format, 'settings', true);
  
  if (data) {
    downloadFile(data.blob, `kouji-settings-${dateStr}.${data.ext}`);
    alert(t('export_success'));
  }
}

function exportRecords(format = 'json') {
  const dateStr = new Date().toISOString().slice(0,10);
  const data = getDataBlob(format, 'records', false);
  
  if (data) {
    downloadFile(data.blob, `kouji-records-${dateStr}.${data.ext}`);
    alert(t('export_success'));
  }
}

function downloadFile(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 导入数据
function importData(e) {
  const file = e.target.files[0];
  
  if (file) {
    importFromFile(file, e);
  } else {
    importFromClipboard();
  }
}

function importFromFile(file, e) {
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      
      if (data.type === 'settings') {
        if (!confirm(t('import_confirm'))) {
          if (e) e.target.value = '';
          return;
        }
        
        if (data.settings) {
          settings = data.settings;
          saveSettings();
        }
        if (data.activities) {
          activities = data.activities;
          saveActivities();
        }
        if (data.locations) {
          locations = data.locations;
          saveLocations();
        }
        if (data.foodCategories) {
          foodCategories = data.foodCategories;
          saveFoodCategories();
        }
        if (data.foods) {
          foods = data.foods;
          saveFoods();
        }
      } else if (data.type === 'records' || data.type === 'full') {
        if (!confirm(t('import_confirm'))) {
          if (e) e.target.value = '';
          return;
        }
        
        if (data.diaryEntries) {
          diaryEntries = data.diaryEntries;
          saveDiaryEntries();
        }
        if (data.activities) {
          activities = data.activities;
          saveActivities();
        }
        if (data.locations) {
          locations = data.locations;
          saveLocations();
        }
        if (data.foodCategories) {
          foodCategories = data.foodCategories;
          saveFoodCategories();
        }
        if (data.foods) {
          foods = data.foods;
          saveFoods();
        }
        if (data.settings) {
          settings = data.settings;
          saveSettings();
        }
      }
      
      currentLang = settings.language || 'zh';
      currentTheme = settings.theme || 'light';
      
      applyTheme();
      updateNavigationLabels();
      renderSettingsTab();
      showToast(t('import_success'));
      
      if (e) e.target.value = '';
    } catch (error) {
      showToast(t('invalid_file'));
      if (e) e.target.value = '';
    }
  };
  reader.readAsText(file);
}

function importFromClipboard() {
  if (navigator.clipboard) {
    navigator.clipboard.readText().then(text => {
      try {
        const data = JSON.parse(text);
        processImportData(data);
      } catch (error) {
        showToast(t('invalid_file'));
      }
    }).catch(() => {
      showToast('无法读取剪贴板');
    });
  } else {
    showToast('无法读取剪贴板');
  }
}

function processImportData(data) {
  if (data.type === 'settings') {
    if (!confirm(t('import_confirm'))) {
      return;
    }
    
    if (data.settings) {
      settings = data.settings;
      saveSettings();
    }
    if (data.activities) {
      activities = data.activities;
      saveActivities();
    }
    if (data.locations) {
      locations = data.locations;
      saveLocations();
    }
    if (data.foodCategories) {
      foodCategories = data.foodCategories;
      saveFoodCategories();
    }
    if (data.foods) {
      foods = data.foods;
      saveFoods();
    }
  } else if (data.type === 'records' || data.type === 'full') {
    if (!confirm(t('import_confirm'))) {
      return;
    }
    
    if (data.diaryEntries) {
      diaryEntries = data.diaryEntries;
      saveDiaryEntries();
    }
    if (data.activities) {
      activities = data.activities;
      saveActivities();
    }
    if (data.locations) {
      locations = data.locations;
      saveLocations();
    }
    if (data.foodCategories) {
      foodCategories = data.foodCategories;
      saveFoodCategories();
    }
    if (data.foods) {
      foods = data.foods;
      saveFoods();
    }
    if (data.settings) {
      settings = data.settings;
      saveSettings();
    }
  }
  
  currentLang = settings.language || 'zh';
  currentTheme = settings.theme || 'light';
  
  applyTheme();
  updateNavigationLabels();
  renderSettingsTab();
  showToast(t('import_success'));
}

// 添加活动
function addActivity() {
  const name = prompt(t('activity_name'));
  if (name) {
    const newActivity = {
      id: Date.now(),
      name: name,
      color: getRandomColor()
    };
    activities.push(newActivity);
    saveActivities();
    renderActivitiesManagement();
    showToast(t('activity_saved'));
  }
}

// 编辑活动


// 删除活动
function deleteActivity(id) {
  if (confirm('确定删除这个活动？')) {
    activities = activities.filter(a => a.id !== id);
    saveActivities();
    renderActivitiesManagement();
    showToast('活动已删除');
  }
}

// 添加地点
function addLocation() {
  const name = prompt(t('location_name'));
  if (name) {
    const newLocation = {
      id: Date.now(),
      name: name,
      color: getRandomColor()
    };
    locations.push(newLocation);
    saveLocations();
    renderLocationsManagement();
    showToast(t('location_saved'));
  }
}

// 编辑地点
function editLocation(id) {
  const location = locations.find(l => l.id === id);
  if (location) {
    const name = prompt(t('location_name'), location.name);
    if (name) {
      location.name = name;
      saveLocations();
      renderLocationsManagement();
      showToast(t('location_saved'));
    }
  }
}

// 删除地点
function deleteLocation(id) {
  if (confirm('确定删除这个地点？')) {
    locations = locations.filter(l => l.id !== id);
    saveLocations();
    renderLocationsManagement();
    showToast('地点已删除');
  }
}

// 添加饮食分类
function addFoodCategory() {
  const name = prompt(t('food_category'));
  if (name) {
    const newCategory = {
      id: Date.now(),
      name: name,
      color: getRandomColor()
    };
    foodCategories.push(newCategory);
    saveFoodCategories();
    renderFoodsManagement();
    showToast(t('food_saved'));
  }
}

// 添加食物
function addFood(categoryId) {
  const name = prompt(t('food_name'));
  if (name) {
    const newFood = {
      id: Date.now(),
      name: name,
      categoryId: categoryId
    };
    foods.push(newFood);
    saveFoods();
    renderFoodsManagement();
    showToast(t('food_saved'));
  }
}

// 删除食物
function deleteFood(id) {
  if (confirm('确定删除这个食物？')) {
    foods = foods.filter(f => f.id !== id);
    saveFoods();
    renderFoodsManagement();
    showToast('食物已删除');
  }
}

// 初始化设置函数
function resetSettings() {
  // 清空localStorage中的所有数据
  localStorage.clear();
  
  // 恢复默认的预设值
  const defaultActivities = [
    { id: 1, name: '学习', color: '#6366f1' },
    { id: 2, name: '工作', color: '#10b981' },
    { id: 3, name: '娱乐', color: '#f97316' },
    { id: 4, name: '运动', color: '#ec4899' },
    { id: 5, name: '社交', color: '#8b5cf6' }
  ];
  
  const defaultLocations = [
    { id: 1, name: '家', color: '#6366f1' },
    { id: 2, name: '办公室', color: '#10b981' },
    { id: 3, name: '学校', color: '#f97316' },
    { id: 4, name: '户外', color: '#ec4899' }
  ];
  
  const defaultFoodCategories = [
    { id: 1, name: '早餐', color: '#6366f1' },
    { id: 2, name: '午餐', color: '#10b981' },
    { id: 3, name: '晚餐', color: '#f97316' },
    { id: 4, name: '零食', color: '#ec4899' }
  ];
  
  const defaultFoods = [
    { id: 1, name: '米饭', categoryId: 1 },
    { id: 2, name: '面条', categoryId: 1 },
    { id: 3, name: '面包', categoryId: 1 },
    { id: 4, name: '炒菜', categoryId: 2 },
    { id: 5, name: '外卖', categoryId: 2 },
    { id: 6, name: '火锅', categoryId: 3 },
    { id: 7, name: '烧烤', categoryId: 3 },
    { id: 8, name: '水果', categoryId: 4 },
    { id: 9, name: '薯片', categoryId: 4 },
    { id: 10, name: '饮料', categoryId: 4 }
  ];
  
  const defaultSettings = {
    language: 'zh',
    theme: 'light'
  };
  
  // 保存默认值到localStorage
  localStorage.setItem('activities', JSON.stringify(defaultActivities));
  localStorage.setItem('locations', JSON.stringify(defaultLocations));
  localStorage.setItem('foodCategories', JSON.stringify(defaultFoodCategories));
  localStorage.setItem('foods', JSON.stringify(defaultFoods));
  localStorage.setItem('settings', JSON.stringify(defaultSettings));
  localStorage.setItem('lang', 'zh');
  localStorage.setItem('theme', 'light');
  
  // 重新初始化全局变量
  currentLang = 'zh';
  currentTheme = 'light';
  diaryEntries = [];
  activities = defaultActivities;
  locations = defaultLocations;
  foodCategories = defaultFoodCategories;
  foods = defaultFoods;
  settings = defaultSettings;
  
  // 显示成功提示
  showToast('设置已初始化，所有数据已恢复为默认值');
  
  // 重新渲染当前页面
  renderCurrentTab();
}

// 校准时间函数
function calibrateTime() {
  // 使用世界时间API获取准确时间
  fetch('http://worldtimeapi.org/api/ip')
    .then(response => response.json())
    .then(data => {
      // 获取网络时间
      const networkTime = new Date(data.datetime);
      // 获取系统时间
      const systemTime = new Date();
      
      // 计算时间差（毫秒）
      const timeDiff = networkTime - systemTime;
      
      // 如果时间差超过1分钟，提示用户校准时间
      if (Math.abs(timeDiff) > 60000) {
        showToast('系统时间与网络时间存在差异，已自动校准');
        // 这里可以存储时间差，用于后续的时间计算
        localStorage.setItem('timeOffset', timeDiff.toString());
      }
    })
    .catch(error => {
      console.error('校准时间失败:', error);
    });
}

// 初始化应用
function initApp() {
  try {
    const storage = init();
    
    currentLang = storage.lang;
    currentTheme = storage.theme;
    diaryEntries = storage.diaryEntries;
    activities = storage.activities;
    locations = storage.locations;
    foodCategories = storage.foodCategories;
    foods = storage.foods;
    settings = storage.settings;
    
    applyTheme();
    updateNavigationLabels();
    initNavigation();
    // 校准时间
    calibrateTime();
    renderCurrentTab();
  } catch (error) {
    console.error('Init error:', error);
  }
}

// 全局函数
window.editEntry = editEntry;
window.deleteEntry = deleteEntry;
window.addActivity = addActivity;
window.editActivity = editActivity;
window.deleteActivity = deleteActivity;
window.addLocation = addLocation;
window.editLocation = editLocation;
window.deleteLocation = deleteLocation;
window.addFoodCategory = addFoodCategory;
window.addFood = addFood;
window.deleteFood = deleteFood;

// 启动应用
window.addEventListener('DOMContentLoaded', initApp);