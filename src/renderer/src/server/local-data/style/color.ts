type Icolor = {
  [s in THEME]: {
    topBar: string // topbar 背景色
    contain: string // top ~ play 渐变
    playBar: string // playBar 背景色
  }
}

export const ThemeColor: Icolor = {
  KiTa: {
    topBar: '#d9e3f6',
    contain: `linear-gradient(to top,#fafafa,#d9e3f6)`,
    playBar: '#fafafa'
  },
  Black: {
    topBar: '#d9e3f6',
    contain: '',
    playBar: '#fafafa'
  }
}

export const colorList = ['KiTa', 'Black']
export type THEME = 'KiTa' | 'Black'
