export interface ArchitectureScenario {
  id: string;
  badge: string;
  title: string;
  question: string;
  summary: string;
  keyMetrics: { label: string; value: string }[];
  steps: {
    phase: string;
    title: string;
    tech: string;
    detail: string;
  }[];
  techStack: string[];
  codeSnippet: {
    language: string;
    filename: string;
    code: string;
  };
}

export const architectureScenarios: ArchitectureScenario[] = [
  {
    id: "rest-api-security",
    badge: "Backend & Security",
    title: "Scalable REST APIs with Auth & PostgreSQL",
    question: "How do you architect high-throughput, secure REST services from scratch?",
    summary: "A production-tested microservice pattern combining Python/FastAPI with Pydantic contract validation, Spring Boot enterprise services, JWT & RBAC token security, and PostgreSQL with Alembic migrations.",
    keyMetrics: [
      { label: "P99 Latency", value: "< 28ms" },
      { label: "Auth Standard", value: "JWT + OAuth2" },
      { label: "Data Integrity", value: "100% ACID" },
      { label: "Schema Evolution", value: "Zero Downtime" }
    ],
    steps: [
      {
        phase: "01. Request Ingress",
        title: "Client & API Gateway",
        tech: "HTTP/2, CORS, Rate Limiting",
        detail: "Incoming client requests pass through structured rate limiting, SSL termination, and header sanitization."
      },
      {
        phase: "02. Auth & RBAC",
        title: "JWT & Permission Gate",
        tech: "OAuth2 Bearer, Argon2 / Bcrypt",
        detail: "Tokens are verified via cryptographically signed JWTs; user scopes and hierarchical role permissions are checked."
      },
      {
        phase: "03. App Business Logic",
        title: "FastAPI / Spring Boot Services",
        tech: "FastAPI, Spring Boot, Pydantic",
        detail: "Async endpoints execute domain logic, validate input DTOs, and trigger transactions without blocking the event loop."
      },
      {
        phase: "04. Persistence Layer",
        title: "SQLAlchemy & PostgreSQL",
        tech: "PostgreSQL 16, SQLAlchemy, Alembic",
        detail: "Data is persisted with indexed relational schemas, transactional isolation, and automated Alembic migration tracking."
      }
    ],
    techStack: ["Python", "FastAPI", "Java", "Spring Boot", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT"],
    codeSnippet: {
      language: "python",
      filename: "routers/auth_service.py",
      code: `@router.post("/api/v1/auth/token", response_model=TokenResponse)
async def authenticate(
    credentials: OAuth2PasswordRequestForm = Depends(),
    db: AsyncSession = Depends(get_db_session)
):
    user = await user_service.authenticate_user(
        db, email=credentials.username, password=credentials.password
    )
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials or inactive account"
        )
    access_token = create_access_token(
        data={"sub": user.id, "roles": user.roles, "tenant": user.tenant_id}
    )
    return TokenResponse(access_token=access_token, token_type="bearer")`
    }
  },
  {
    id: "ai-translation-engine",
    badge: "AI & NLP Pipeline",
    title: "Multilingual Translation Engine with NLLB-200",
    question: "How do you implement low-latency AI machine translation and language detection?",
    summary: "An optimized NLP inference architecture utilizing Meta's NLLB-200 (No Language Left Behind) model, fast language detection, sentence-piece tokenization, and asynchronous API endpoints for real-time multilingual conversion.",
    keyMetrics: [
      { label: "Supported Languages", value: "200+ Dialects" },
      { label: "Inference Time", value: "~180ms" },
      { label: "Batch Capability", value: "Async Queue" },
      { label: "Language Accuracy", value: "98.4%" }
    ],
    steps: [
      {
        phase: "01. Language Detection",
        title: "Input Parsing & Detection",
        tech: "FastText, NLP Tokenizer",
        detail: "Multilingual input stream is inspected to detect source language code (BCP-47) with confidence scoring."
      },
      {
        phase: "02. Text Normalization",
        title: "Sanitization & Chunking",
        tech: "SentencePiece, Regex Cleaners",
        detail: "Long text is broken into sentence boundaries to avoid token overflow and preserve semantic context."
      },
      {
        phase: "03. Neural Inference",
        title: "NLLB-200 Transformer Engine",
        tech: "PyTorch, Transformers, ONNX",
        detail: "The multi-dialect transformer translates into target language using constrained beam search."
      },
      {
        phase: "04. Output Delivery",
        title: "Async REST / WebSocket Stream",
        tech: "FastAPI, Cache Layer",
        detail: "Translated output is delivered to client apps with caching for high-frequency common phrases."
      }
    ],
    techStack: ["Python", "NLLB-200", "FastAPI", "PyTorch", "NLP", "Machine Translation", "Language Detection", "Docker"],
    codeSnippet: {
      language: "python",
      filename: "services/translation_pipeline.py",
      code: `class NLLBPipeline:
    def __init__(self, model_name: str = "facebook/nllb-200-distilled-600M"):
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModelForSeq2SeqLM.from_pretrained(model_name).to(DEVICE)

    async def translate(self, text: str, src_lang: str, tgt_lang: str) -> str:
        # Detect source if not explicitly provided
        src_lang = src_lang or await self.detect_language(text)
        self.tokenizer.src_lang = src_lang
        
        inputs = self.tokenizer(text, return_tensors="pt", truncation=True, max_length=512).to(DEVICE)
        forced_bos_token_id = self.tokenizer.convert_tokens_to_ids(tgt_lang)
        
        generated_tokens = self.model.generate(
            **inputs,
            forced_bos_token_id=forced_bos_token_id,
            max_length=512,
            num_beams=4
        )
        return self.tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)[0]`
    }
  },
  {
    id: "devops-cicd-pipeline",
    badge: "DevOps & CI/CD",
    title: "Automated Testing, Docker Builds & GitHub Actions",
    question: "How do you achieve automated, reliable deployments with zero downtime?",
    summary: "Production-grade CI/CD pipelines enforcing automated linting, test suites (PyTest/JUnit), multi-stage Docker builds, image scanning, and automated deployment verification.",
    keyMetrics: [
      { label: "Deployment Frequency", value: "Continuous" },
      { label: "Build Time", value: "< 3.5 mins" },
      { label: "Test Coverage Gate", value: "> 85%" },
      { label: "Container Size", value: "Minimal Alpine" }
    ],
    steps: [
      {
        phase: "01. Version Control Gate",
        title: "Git Pull Request",
        tech: "Git, GitHub Branch Rules",
        detail: "Code changes trigger automated CI checks with required peer review and linear git history."
      },
      {
        phase: "02. Automated Test Matrix",
        title: "Unit, Integration & Lints",
        tech: "GitHub Actions, PyTest, Maven",
        detail: "Linters (Ruff/ESLint), type checkers (mypy/tsc), and unit/integration test suites run concurrently."
      },
      {
        phase: "03. Containerized Build",
        title: "Multi-Stage Docker Image",
        tech: "Docker, BuildKit Caching",
        detail: "Multi-stage builds separate compilation dependencies from the lean production runtime image."
      },
      {
        phase: "04. Production Deployment",
        title: "Healthcheck & Blue-Green",
        tech: "Docker Compose, Rollback Hooks",
        detail: "New containers launch alongside live instances; traffic cuts over only after healthy readiness probes pass."
      }
    ],
    techStack: ["Docker", "Docker Compose", "GitHub Actions", "Git", "Maven", "Automated Testing", "CI/CD"],
    codeSnippet: {
      language: "yaml",
      filename: ".github/workflows/deploy.yml",
      code: `name: Production CI/CD Pipeline
on:
  push:
    branches: [ main ]

jobs:
  test_and_build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Python & Node
        uses: actions/setup-python@v5
        with: { python-version: '3.11' }
      - name: Run Test Suite
        run: |
          pip install -r requirements.txt
          pytest --cov=app tests/ --cov-fail-under=85
      - name: Build & Push Docker Image
        run: |
          docker build --target production -t registry/app:\${{ github.sha }} .
          docker compose -f docker-compose.prod.yml up -d --remove-orphans`
    }
  },
  {
    id: "figma-design-to-code",
    badge: "Design-to-Code & Frontend",
    title: "Figma Tokens to Pixel-Perfect Responsive UI",
    question: "How do you translate complex Figma design systems into responsive Next.js apps?",
    summary: "A rigorous design-to-code methodology converting Figma auto-layouts, design tokens, and components into reusable, accessible Next.js and Tailwind CSS interfaces with 60fps micro-interactions.",
    keyMetrics: [
      { label: "Design Fidelity", value: "100% Pixel-Match" },
      { label: "Responsiveness", value: "Mobile to 4K" },
      { label: "Lighthouse Score", value: "98+ Performance" },
      { label: "Accessibility", value: "WCAG AA" }
    ],
    steps: [
      {
        phase: "01. Token Extraction",
        title: "Figma System Inspection",
        tech: "Figma Variables, Grid Specs",
        detail: "Spacing scales, color tokens, typography scales, and responsive breakpoints are mapped directly to Tailwind."
      },
      {
        phase: "02. Atomic Components",
        title: "Modular Component Architecture",
        tech: "React, TypeScript, Lucide Icons",
        detail: "Buttons, modals, cards, and navigation items are coded with strict TypeScript interfaces."
      },
      {
        phase: "03. Dynamic Interactivity",
        title: "Framer Motion Animations",
        tech: "Framer Motion, CSS Transitions",
        detail: "Smooth entrance transitions, hover physics, and layout animations provide a tactile, responsive feel."
      },
      {
        phase: "04. Cross-Device Tuning",
        title: "Responsive Quality Assurance",
        tech: "Next.js, Tailwind CSS, Viewports",
        detail: "Ensures flawless appearance across mobile touch devices, tablets, desktop workstations, and ultra-wides."
      }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "Framer Motion", "Responsive Design"],
    codeSnippet: {
      language: "typescript",
      filename: "components/ResponsiveCard.tsx",
      code: `interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  icon: React.ReactNode;
}

export function MetricCard({ label, value, change, icon }: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl shadow-xl transition-shadow hover:shadow-cyan-500/10"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">{label}</span>
        <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400">{icon}</div>
      </div>
      <div className="mt-4 text-3xl font-bold tracking-tight text-white">{value}</div>
      {change && <p className="mt-1 text-xs text-zinc-400">{change}</p>}
    </motion.div>
  );
}`
    }
  }
];
