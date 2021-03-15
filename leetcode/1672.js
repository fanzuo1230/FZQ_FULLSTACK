/**
 * @param {number[][]} accounts
 * @return {number}
 */
//给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。
// 返回最富有客户所拥有的 资产总量 。
// 客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。

 var maximumWealth = function(accounts) {
    let res=[];
    accounts.map(item=>{//map 遍历 使 item =accounts[i]
        let number=item.reduce((a,b)=>{//运用reduce方法求数组元素之和,将和存入一个number
            return a+b
        })
        res.push(number);//将number存入数组res
    })
    return Math.max(...res)//求res中最大的元素
    };