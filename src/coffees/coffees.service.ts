import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: '拿铁',
            brand: '星巴克',
            flavors: ['热', '半糖']
        }
    ];

    /**
     * 查询所有
     * @returns 
     */
    findAll() {
        return this.coffees;
    }

    /**
     * 查询指定id
     * @param id id
     * @returns 
     */
    findOne(id: string) {
        const coffee = this.coffees.find(coffee => coffee.id === +id);
        if (!coffee) {
            throw new HttpException(`Coffee #${id} is not found`, HttpStatus.NOT_FOUND);
        }
        return coffee;
    }

    /**
     * 根据id进行更新
     * @param id id
     * @param createCoffeeDto content
     * @returns 
     */
     create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
    }

    /**
     * 根据id进行更新
     * @param id id
     * @param createCoffeeDto content
     * @returns 
     */
    update(id: string, createCoffeeDto: any) {
        let existingCoffee = this.findOne(id);
        if(existingCoffee) {
            existingCoffee = createCoffeeDto;
            return createCoffeeDto;
        }
    }

    /**
     * 根据id进行删除
     */
    delete(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
