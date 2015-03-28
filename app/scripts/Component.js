/**
 * 容器类
 */
function Container(){

	this.parent = null;
	var children = [];
	/**
     * 添加子组件
     * @param component 子组件
     * @param position 组件放置的位置
     */
	this.addChild = function(component , position){

	}

	this.findById = function(id){

	}
}


/**
 * 组件定义类，所有面板都需要与这个类通讯
 * 定义类包含了组件的元数据信息
 */
function ComponentDefinition(){

	/** 
	 * 获取一个对象实例
	 */
	this.getInstance = function(){
		throw new Error("需要子类实现");
	}

	/**
	 * 得到组件基本信息，
	 * @return {name:"组件名称",label:"显示名",img:"组件图标", helpString:"帮助描述"}
	 */
	this.getBaseInfo = function(){
		throw new Error("需要子类实现");
	}

	/**
	 * 得到支持的属性列表,属性面板显示列表
	 * [{group:"属性分组",label:"分组显示名",[{name:"属性名",label:"属性显示名",type:"属性类型"}]}[,...]]
	 */
	this.getPropertyDefinitions = function(){
		throw new Error("需要子类实现");
	}

	/**
	 * 得到组件支持的事件列表，事件面板
	 */
	this.getEventDefinitions = function(){
		throw new Error("需要子类实现");
	}

	/**
	 * 组件的html模板
	 */
	this.getTemplate = function(){
		throw new Error("需要子类实现");
	}

}


/**
 * 组件，负责维护组件的数据结构，并且在数据结构发生变化时通知
 */
function Component(){

	var propertyChangeListeners = [];
	var eventProxy = null; //事件代理对象

	this.render = null;
	this.id = "";  //组件id
    this.parent = null;
    this.element = null;

	var initEventProxy = function(){

	}

	/**
	 * 初始化
	 * @param element
	 * @param optios 
	 * @param parent 复组件
	 * @param render 组件绘制对象
	 */
	this.initialize = function( element , options , parent , render){
		this.parent = parent;
		component.addChild(this);
		this.render = render;
		this.parent = parent;
		this.element = element;
	}

	/**
	 * 设置父组件
	 */
	this.setParent = function(parent){
		this.parnt = parent;
	}
	/**
	 * 设置事件代理类
	 */
	this.setEventProxy = function(eventProxy){

	}

	this.getProperties = function(){
		throw new Error("需要子类实现");
	}

	/**
	 * 得到组件支持的事件
	 */
	this.getSupportEvents = function(){
		throw new Error("需要子类实现");
	}
	/**
	 * 修改/添加，属性值
	 * @param propertyName 属性名称
	 * @param propertyValue 属性值
	 */
	this.setProperty = function(propertyName , peopertyValue){

	}

	/**
	 * 添加组件属性变化监听
	 * @param listener 监听对象
	 */
	this.addPropertyChangeListener = function(listener){

	};

	/**
	 * 解析
	 */
	this.resolveTemplate = function(){

	};

	/**
	 * 绑定dom事件
	 */
	this.bindDomEvent = function(){

	};
	/**
	 * 画组件
	 */
	this.render = function(){

	};

}

/**
 * 组件绘制类，负责绘制组件View
 */ 
function ComponentRender(){

	var component = null;
	
	/**
	 * 初始化
	 * @param container 绘制的容器
	 * @param _component 组件
	 * @param options 绘制的
	 */
	this.initialize = function(container , _component , options){
		this.parent = parent;
		component = _component;
	    
	}

	/**
	 * 绘制组件
	 */
	this.render = function(){

	}

	/**
	 * 添加dom事件
	 */
	this.addEvent = function(callback){

	}
}

/**
 *  组件编辑类，负责编辑组件属性,并且提供组件编辑界面
 */
function ComponentEditor(component){

}