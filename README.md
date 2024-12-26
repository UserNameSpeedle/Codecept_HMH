# HMH Tech Test - Victor

## Getting Started

### Clone the Project

Start by cloning the repository:

```bash
git clone git@github.com:UserNameSpeedle/Codecept_HMH.git
```

Navigate to the project folder:

```bash
cd Codecept_HMH
```

### Install Dependencies

Install the necessary project dependencies by running:

```bash
npm install
```

## Running Tests

### Single-Browser Test with Detailed Steps

To run the tests in a single browser with detailed step-by-step output, use:

```bash
npx codeceptjs run --steps
```

### Parallel Execution with Two Browsers

To execute tests in two browsers simultaneously, run:

```bash
npx codeceptjs run-workers 2 two
```

### Using Tags

To filter tests by tags, use the `--grep` flag followed by the tag name. Examples:

- Run tests tagged as `@pass`:
  ```bash
  npx codeceptjs run --grep '@pass'
  ```

- Run tests tagged as `@bug`:
  ```bash
  npx codeceptjs run --grep '@bug'
  ```
```