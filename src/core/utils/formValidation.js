import * as z from "zod";

const formValidation = (types) => {
	const schema = {};
	types.map((type) => {
		switch (type) {
			case "email":
				schema.email = z
					.string()
					.email("ایمیل نامعتبر است")
					.optional()
					.or(z.literal(""));
				break;

			case "nationalCode":
				schema.nationalCode = z
					.string()
					.min(1, "لطفا کد ملی خود را وارد نمایید")
					.regex(/^[0-9]{10}$/g, "کد ملی باید 10 رقم باشد");
				break;

			case "shaba_code":
				schema.shaba_code = z
					.string()
					.regex(/^(?:IR)(?=.{24}$)[0-9]*$/, "شماره شبا صحیح نیست")
					.optional()
					.or(z.literal(""));
				break;

			case "debitCard_code":
				schema.debitCard_code = z
					.string()
					.regex(/^(^[5|6]\d{3})-(\d{4})-(\d{4})-(\d{4})$/, "شماره کارت صحیح نیست")
					.min(1, "لطفا شماره کارت بانکی خود را وارد نمایید");
				break;

			case "accountIdentifier":
				schema.accountIdentifier = z.string().optional().or(z.literal(""));
				break;

			case "gender":
				schema.gender = z.string();
				break;

			default:
				schema[type] = z
					.string()
					.min(1, "لطفا اطلاعات این قسمت را وارد نمایید")
					.min(3, `لطفا اطلاعات را به درستی وارد نمایید`);
		}
	});

	return schema;
};

export default formValidation;
