<script lang="ts">
	import Socials from '../components/Socials.svelte';
	import Meta from '../components/Meta.svelte';
	import Slider from '../components/Slider.svelte';
	import { SiteData } from '../site';
	import Tagline from '@components/Tagline.svelte';
	import MeImage from "@assets/images/me1.jpg";
	import type { PageData } from './$types';
	
	let portfolioItem = SiteData.portfolio[0];
	export let data: PageData;
</script>

<Meta title="Homepage" description="this website has stuff about me and the work ive done." />
<!-- Hero -->
<div class="flex flex-col items-center">
	<div class="sm:flex-row flex flex-col items-center py-4 space-x-8">
		<img alt="face of aryan mann" class="max-h-32 rounded-full shadow-xl animate-cool" src={MeImage} />
		<h1 class="text-4xl">hey! i'm aryan.</h1>
	</div>
	<h3 class="py-2 text-xl text-center">this website has stuff about me and the work ive done.</h3>
</div>
<Tagline title="working on..." hasDog={true}>
	currently im a part of the{' '}<a href='https://cohere.com/coral'>synth</a> team at{' '}<img class='inline h-4 w-4' alt='cohere logo' src='https://cohere.com/favicon.ico' />
	<b>cohere</b>, figuring out the ins and outs of making and evaluating high quality synthetic data for steering LLMs
</Tagline>
<!-- Socials -->
<Socials />
<!-- Begin Work Portfolio -->
<h3 class="w-full py-4 mt-8 text-xl text-center">
	<p>actual work & personal projects</p>
</h3>
<!-- Work Portfolio Slider -->
<Slider items={SiteData.portfolio} bind:currentItem={portfolioItem}>
	{#if portfolioItem}
		<div class="flex flex-col w-full">
			<a
				class="text-xl no-underline font-bold hover:text-primary-700 text-center w-full animate-pulse"
				href={`https://${portfolioItem.website}`}
				target="_blank" rel="noreferrer"
				>{portfolioItem.website || portfolioItem.website}</a
			>
			<a href={`https://${portfolioItem.website}`}>
				<img class="shadow w-full aspect-video cursor-pointer transform-gpu hover:-rotate-1 hover:shadow-md duration-200" alt="" src={portfolioItem.image} />
			</a>
			{#if portfolioItem.description}
				<p class="mt-3 text-xl">{portfolioItem.description}</p>
			{/if}
		</div>
	{/if}
</Slider>
<!-- Work Summary -->
<h3 class="w-full py-4 mt-8 text-2xl text-center">
	quick summary (<a href="https://github.com/aryan-mann">longer one here</a>)
</h3>
<div class="flex justify-center">
	<ul class="max-w-screen-sm list-disc text-lg">
		<li>
			<b>july 2023 to present</b>{' '}– trying to make large language models useful to enterprises (ps: try talking to <a href="https://coral.cohere.com/">coral</a>)
		</li>
		<li>
			<b>july 2021 to june 2023</b>{' '}
			– working on enabling low-touch high-performance synthetic worlds that generate data for computer
			vision models.. i.e.{' '}
			<a href="https://github.com/Unity-Technologies/com.unity.perception">
				perception package
			</a>{' '}
			for Unity Technologies
		</li>
		<li>
			<b>june 2017 to may 2021</b> – studied computer science and philosopy at Grinnell College. favorite
			classes: philosophy of mind, automata theory, algorithms, metaphysics!
		</li>
		<li>
			<b>december 2018 to march 2020</b> – worked at the data analysis and social inquiry lab making
			information about alumni outcomes accessible to current students via an interactive React app
		</li>
		<li>
			<b>april 2016 to june 2018</b> – worked on creating three beautiful websites via cutting
			edge web technologies such as React, NextJs, and SSG. 
				(1) <a class='inline' href="https://amchemproducts.com">amchemproducts.com</a>
				(2) <a class='inline' href="https://drythane.com">drythane.com</a>
				(3) <a class='inline' href="https://amshield.com">amshield.com</a>
		</li>
		<li>
			<b>1990s to april 2016</b> – ¯\_(ツ)_/¯
		</li>
	</ul>
</div>

{#if data.recentPosts}
<!-- Latest Blog Post -->
<h3 class="py-4 mt-8 text-xl">hot off the press</h3>
<div class="flex flex-col gap-4 flex-wrap px-8 text-xl">
	{#each data.recentPosts as recentPost}
	<div class='flex gap-4 items-center'>
			<span class="mr-2">📝✍🏽</span><a class="text-xl no-underline hover:bg-slate-50 px-2" href={recentPost.url}>{recentPost.title}</a>
			<p class='text-sm whitespace-nowrap'>on {recentPost.date.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric'})}</p>
	</div>
	{/each}
</div>
{/if}

<!-- Fake Todo List -->
<h3 class="py-4 mt-4 text-xl">todo list</h3>
<ul class="inline-flex flex-col ml-8 list-disc">
	<li style="text-decoration: line-through;">add a post about something</li>
	<li>add more detailed project breakdowns</li>
	<li>add analytics to track your every movement muahaha</li>
	<li>remove remaining capital letters</li>
</ul>

<style>
	@keyframes spin {
		from {
			transform: rotate(0deg) scale(0.9);
		}
		25% {
			transform: rotate(-10deg);
		}
		50% {
			transform: rotate(0deg) scale(1.2);
		}
		75% {
			transform: rotate(10deg);
		}
		to {
			transform: rotate(0deg) scale(0.9);
		}
	}
	.animate-cool {
		animation: spin 8s cubic-bezier(0.755, 0.05, 0.855, 0.06) infinite;
	}
</style>