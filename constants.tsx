
import React from 'react';
import { Resource, Category, Difficulty } from './types';

export const RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'Your AI Product Needs Evals',
    description: 'Hamel Husain\'s foundational guide on Evaluation-Driven Development. This is the #1 recommended starting point for practitioners.',
    url: 'https://hamel.dev/blog/posts/evals/',
    category: Category.BestPractices,
    difficulty: Difficulty.Beginner,
    author: 'Hamel Husain',
    tags: ['EDD', 'Workflow', 'Product']
  },
  {
    id: '2',
    title: 'Applied LLMs: Evaluation',
    description: 'A deep dive into how to build evaluation pipelines for real-world applications, covering heuristics and model-based evals.',
    url: 'https://eugeneyan.com/writing/llm-evals/',
    category: Category.Foundations,
    difficulty: Difficulty.Intermediate,
    author: 'Eugene Yan',
    tags: ['Applied AI', 'Metrics', 'Strategy']
  },
  {
    id: '3',
    title: 'Promptfoo Documentation',
    description: 'The industry-standard CLI tool for testing prompts and models. Learn by doing: set up a config file and run your first eval locally.',
    url: 'https://www.promptfoo.dev/docs/intro/',
    category: Category.Frameworks,
    difficulty: Difficulty.Intermediate,
    author: 'Promptfoo Team',
    tags: ['Tools', 'CI/CD', 'Testing']
  },
  {
    id: '4',
    title: 'OpenAI Evals GitHub',
    description: 'The official registry for evaluating LLMs. Study their YAML schemas to understand how professional evaluation datasets are structured.',
    url: 'https://github.com/openai/evals',
    category: Category.Tools,
    difficulty: Difficulty.Advanced,
    author: 'OpenAI',
    tags: ['Github', 'Datasets', 'Standard']
  },
  {
    id: '5',
    title: 'RAGAS Documentation',
    description: 'Specific framework for evaluating Retrieval Augmented Generation systems using metrics like Faithfulness and Relevancy.',
    url: 'https://docs.ragas.io/en/stable/',
    category: Category.RAG,
    difficulty: Difficulty.Intermediate,
    author: 'Exploding Gradients',
    tags: ['RAG', 'Metrics', 'Retrieval']
  },
  {
    id: '6',
    title: 'DeepEval (Unit Testing for LLMs)',
    description: 'A Python framework that makes LLM evaluation as easy as unit testing with Pytest. Great for developers familiar with software testing.',
    url: 'https://www.confident-ai.com/docs/getting-started',
    category: Category.Frameworks,
    difficulty: Difficulty.Beginner,
    author: 'Confident AI',
    tags: ['Python', 'Unit Testing', 'DX']
  },
  {
    id: '7',
    title: 'The LLM Triangle Principles',
    description: 'Understanding the balance between Models, Data, and Evals. A strategic framework for building robust AI systems.',
    url: 'https://towardsdatascience.com/the-llm-triangle-principles-to-architect-reliable-ai-apps-f39002206778',
    category: Category.BestPractices,
    difficulty: Difficulty.Beginner,
    author: 'Zhenzhong Xu',
    tags: ['Architecture', 'Reliability']
  },
  {
    id: '8',
    title: 'LlamaIndex Evaluation Module',
    description: 'Comprehensive guide on evaluating advanced RAG techniques: sub-questions, multi-step reasoning, and more.',
    url: 'https://docs.llamaindex.ai/en/stable/module_guides/evaluating/root.html',
    category: Category.RAG,
    difficulty: Difficulty.Intermediate,
    author: 'LlamaIndex',
    tags: ['RAG', 'LlamaIndex', 'Advanced']
  }
];

export const APP_CONFIG = {
  SYSTEM_INSTRUCTION: `You are an AI Evals Expert. Your goal is to help users learn the skill of evaluating AI systems (LLMs). 
  Focus on practical advice:
  1. Recommend "Evaluation-Driven Development" (EDD).
  2. Explain metrics like MMLU, GSM8K, but emphasize custom application-specific evals.
  3. Suggest tools like Promptfoo, DeepEval, or RAGAS.
  4. Explain the difference between heuristic-based evals and model-based evals (LLM-as-a-judge).
  If a user asks for resources, refer to the ones provided in the app (Hamel Husain, Eugene Yan, etc.). Keep answers concise and actionable.`
};
