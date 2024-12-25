# HMH Tech Test - Victor


## Install Dependencies

Clone project:

```bash
git clone git@github.com:UserNameSpeedle/Codecept_HMH.git
```

Switch to project folder:

```bash
cd Codecept_HMH
```

To get started, you need to install the project dependencies. Run the following command:

```bash
npm install
```

## Run Tests

One browser with detailed steps run the following command:

```bash
npx codeceptjs run --steps
```

Two browser in parallel run the following command:

```bash
npx codeceptjs run-workers 2 two
```

tags:

```bash
--grep '@pass'
--grep '@bug'
```