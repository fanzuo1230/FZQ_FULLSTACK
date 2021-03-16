/**
 * 给你一个数组 items ，其中 items[i] = [typei, colori, namei] ，
描述第 i 件物品的类型、颜色以及名称。
另给你一条由两个字符串 ruleKey 和 ruleValue 表示的检索规则。
如果第 i 件物品能满足下述条件之一，则认为该物品与给定的检索规则 匹配 ：
ruleKey == "type" 且 ruleValue == typei 。
ruleKey == "color" 且 ruleValue == colori 。
ruleKey == "name" 且 ruleValue == namei 。
 * 
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    var number=0;
    items.map(item=>{
        if(item[0]==ruleValue&&ruleKey=="type")
        {
                    number++;
                }
            else if(item[1]==ruleValue&&ruleKey=="color"){
                    number++;
                }
                else if(item[2]==ruleValue&&ruleKey=="name"){
                    number++;
                }
    })
    return number
    };