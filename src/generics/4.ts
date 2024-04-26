interface Student {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<Student>) {
  return { ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
