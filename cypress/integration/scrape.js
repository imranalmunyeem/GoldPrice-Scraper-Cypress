describe('Scrap Gold Prices',()=> {

    beforeEach('Run before each test',()=>{
        cy.visit('https://www.bullion-rates.com/gold/USD-history.htm')
    })

    it('Scrape Data',()=> {
        cy.get('#dtDGrid>tbody>tr.DataRow')
        .each(($row, index, $rows)=>{

            cy.wrap($row).within(()=>{
                cy.get('td')
                .each(($cellData, index, $columns)=>{
                    cy.log($cellData.text())
                }
                )
            }
            )
        }
        )
    })
})