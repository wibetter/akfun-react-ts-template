/**
 * WidgetContainer: 默认布局的块级容器实体
 * position：relative
 * 用途：用于在widgetLayout中新增大的布局容器
 */
export const WidgetContainer = {
  type: 'container',
  class: ['widget-container'],
  child: [
    {
      type: 'row',
      class: ['widget-row'],
      child: [
        {
          type: 'column',
          class: ['widget-column'],
          child: [
            {
              type: 'elem-slot',
              class: ['elem-slot'],
            },
          ],
        },
      ],
    },
  ],
};

/**
 * WidgetRow: 默认行级布局容器实体
 * 用途：用于在widgetLayout中新增一行
 */
export const WidgetRow = {
  type: 'row',
  class: ['widget-row'],
  child: [
    {
      type: 'column',
      class: ['widget-column'],
      child: [
        {
          type: 'elem-slot',
          class: ['elem-slot'],
        },
      ],
    },
  ],
};

/**
 * WidgetColumn: 默认单元布局容器实体
 * 用途：用于在widgetLayout中新增一列
 */
export const WidgetColumn = {
  type: 'column',
  class: ['widget-column'],
  child: [
    {
      type: 'elem-slot',
      class: ['elem-slot'],
    },
  ],
};

/**
 * ElemSlot
 * 用途：元件占位（可以放置任何元素）
 */
export const ElemSlot = {
  type: 'elem-slot',
  class: ['elem-slot'],
};

/**
 * EmbedWidgetSlot: jdw嵌套组件占位
 * 用途：用于jdw嵌套组件的占位
 */
export const EmbedWidgetSlot = {
  type: 'embed-widget-slot',
  class: ['embed-widget-slot'],
};
