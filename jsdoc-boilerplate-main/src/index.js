// @ts-check

/**
 * 아이디
 * @type {string}
 */
const userName = 'JunHo SON';

/**
 * 내용
 * @type {string}
 */
const contents = 'My Todo List';

/**
 * 완료여부
 * @type {boolean}
 */
const isComplete = true;

/**
 * 카테고리
 * @type {string}
 */
const category = '카테고리';

/**
 * 태그들
 * @type {Array<string>}
 */
const tag = ['C', 'Python', 'Java'];

/**
 * @type {{id: number, text: string}}
 */
const todo = {
	id: 1,
	text: 'Hello'
}

/**
 * 세금 계산
 * @param {number} amount - 총 액
 * @param {number} tax - 세금율
 * @returns {string} - 총 달러
 */
const calculateTax = (amount, tax) => {
	return `$${amount + tax * amount}`;
};

/**
 * 학생
 * @typedef {Object} Student
 * @property {number} id - 학번
 * @property {string} name - 이름 
 * @property {string|number} [age] - 나이
 * @property {boolean} isActive - 재학여부
 */

/**
 * @type {Student}
 */
const student = {
	id: 1,
	name: 'JunHo SON',
	age: 20,
	isActive: true
}

/**
 * Class to create a person Object
 */
class Person {
	/**
	 * 
	 * @param {Object} personInfo 사람에 관한 정보
	 */
	constructor(personInfo) {
		/**
		 * @property {string} name 이름
		 */
		this.name = personInfo.name;
		/**
		 * @property {string} age 나이
		 */
		this.age = personInfo.age;
	}
	
	/**
	 * @property {Function} greet 만나서 반갑다
	 * @returns void
	 */
	greet() {
		console.log('hello');
	}
}

/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
	name: 'John Doe',
	age: 30
});
